using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Multilingual.ASPNETCore.Models;
using IronBarCode;
using System.Drawing;
using System.IO;
using Microsoft.VisualBasic;
using ZXing.QrCode;

namespace Multilingual.ASPNETCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            try
            {
               
                var width = 30;
                var height = 30;
                var barcodeWriterPixelData = new ZXing.BarcodeWriterPixelData
                {
                    Format = ZXing.BarcodeFormat.QR_CODE,
                    Options = new QrCodeEncodingOptions
                    {
                        Height = height,
                        Width = width,
                        Margin = 0
                    }
                };
                var pixelData = barcodeWriterPixelData.Write("Hoavu");
                var barcode = "";
                using (var bitmap = new Bitmap(pixelData.Width, pixelData.Height, System.Drawing.Imaging.PixelFormat.Format32bppRgb))
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        var bitmapData = bitmap.LockBits(new Rectangle(0, 0, pixelData.Width, pixelData.Height), System.Drawing.Imaging.ImageLockMode.WriteOnly, System.Drawing.Imaging.PixelFormat.Format32bppRgb);
                        try
                        {
                            System.Runtime.InteropServices.Marshal.Copy(pixelData.Pixels, 0, bitmapData.Scan0, pixelData.Pixels.Length);
                        }
                        finally
                        {
                            bitmap.UnlockBits(bitmapData);
                        }
                        bitmap.Save(memoryStream, System.Drawing.Imaging.ImageFormat.Png);
                        barcode = String.Format("data:image/png;base64,{0}",
                            Convert.ToBase64String(memoryStream.ToArray()));
                    }
                }
                ViewBag.QrCodeUri = barcode;
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult CreateBarcode(GenerateBarcodeModel generateBarcode)
        {
            try
            {
                GeneratedBarcode barcode = IronBarCode.BarcodeWriter.CreateBarcode(generateBarcode.BarcodeText, BarcodeWriterEncoding.Code128);
                barcode.ResizeTo(400, 120);
                barcode.AddBarcodeValueTextBelowBarcode();
                // Styling a Barcode and adding annotation text
                barcode.ChangeBarCodeColor(Color.BlueViolet);
                barcode.SetMargins(10);
                string filePath = "D:/barcode.png";
                barcode.SaveAsPng(filePath);
                string fileName = "barcode.png";
                string imageUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}" + "/GeneratedBarcode/" + fileName;
                ViewBag.QrCodeUri = imageUrl;
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }
    }
}
