import { Free } from "./pages/Free";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { About } from "./pages/About";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { NavbarComponent } from "./pageLayoutComponents/NavbarComponent";
import { HeaderComponent } from "./pageLayoutComponents/HeaderComponent";
import { Write } from "./pages/Write";
import { FooterComponent } from "./pageLayoutComponents/FooterComponent";

export const AppRoutes = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <BrowserRouter>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <NavbarComponent />
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            <FooterComponent />
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <HeaderComponent />
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/free" element={<Free />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/write" element={<Write />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};
