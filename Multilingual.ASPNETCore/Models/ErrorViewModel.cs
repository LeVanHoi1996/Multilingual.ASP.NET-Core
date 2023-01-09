using System;

namespace Multilingual.ASPNETCore.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
    public class GenerateBarcodeModel
    {
       
        public string BarcodeText
        {
            get;
            set;
        }
    }
}
