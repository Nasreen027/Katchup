import { SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { LuFolder, LuUser } from "react-icons/lu";
import { colors } from "../theme/colors";

// const variants = ["line", "enclosed", "enclosed-colored", "soft-rounded", "solid-rounded", "unstyled"];

const CustomTabs = () => {
  return (
    <SimpleGrid gap="14" width="100%" color={colors?.text?.primary}>
        <Tabs variant={"plain"}>
          <TabList display={'flex'} justifyContent={'center'}>
            <Tab>
              <LuUser />
              Members
            </Tab>
            <Tab>
              <LuFolder />
              Projects
            </Tab>
            <Tab>
              Settings
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Manage your team members</TabPanel>
            <TabPanel>Manage your projects</TabPanel>
            <TabPanel>Manage your tasks for freelancers</TabPanel>
          </TabPanels>
        </Tabs>
    </SimpleGrid>
  );
};

export default CustomTabs;
