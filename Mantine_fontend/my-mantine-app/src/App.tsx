// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { DoubleNavbar } from './Navbar';
 import { HeaderMegaMenu } from './Header';

 import { NavbarSegmented } from './Navbar';
 import { FooterLinks } from './Footers';

// var a =["1","2"];

// function App() {
//   return (
//     <div className="App">
//       {/* <HeaderTabs  user={{name : "Mrh" , image : ""}} tabs= {a} />  */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
      
//     </div>
//   );
// }

// export default App;



import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

var a =["1","2"];

var  dataf = [
    {
      "title": "About",
      "links": [
        {
          "label": "Features",
          "link": "#"
        },
        {
          "label": "Pricing",
          "link": "#"
        },
        {
          "label": "Support",
          "link": "#"
        },
        {
          "label": "Forums",
          "link": "#"
        }
      ]
    },
    {
      "title": "Project",
      "links": [
        {
          "label": "Contribute",
          "link": "#"
        },
        {
          "label": "Media assets",
          "link": "#"
        },
        {
          "label": "Changelog",
          "link": "#"
        },
        {
          "label": "Releases",
          "link": "#"
        }
      ]
    },
    {
      "title": "Community",
      "links": [
        {
          "label": "Join Discord",
          "link": "#"
        },
        {
          "label": "Follow on Twitter",
          "link": "#"
        },
        {
          "label": "Email newsletter",
          "link": "#"
        },
        {
          "label": "GitHub discussions",
          "link": "#"
        }
      ]
    }
  ] ;


export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // navbar={
      //  <NavbarSegmented />
      // }
      
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
       <FooterLinks data={dataf} />
      }
      header={
        <HeaderMegaMenu  />
        // <Header height={{ base: 50, md: 70 }} p="md">
        //   <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        //     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        //       <Burger
        //         opened={opened}
        //         onClick={() => setOpened((o) => !o)}
        //         size="sm"
        //         color={theme.colors.gray[6]}
        //         mr="xl"
        //       />
        //     </MediaQuery>

        //     <Text>Application header</Text>
        //   </div>
        // </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
