import React, { useState } from "react";
import { Divider, Menu } from "react-native-paper";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { COLORS, icons } from "../../../constants";
import { useRouter } from "expo-router";

const CustomMenu = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  const handleLogOut = () => {
    router.replace("/login");
  };

  const handleSavedJobs = () => {
    router.push("/saved");
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <ScreenHeaderBtn
          iconUrl={icons.menu}
          dimension="60%"
          handlePress={openMenu}
        />
      }
      backgroundColor={COLORS.orange}
      style={{ marginTop: 50 }}
    >
      <Menu.Item
        onPress={handleSavedJobs}
        leadingIcon="heart"
        title="Saved movies"
        style={{
          height: 40,
        }}
      />
      <Divider />
      <Menu.Item
        onPress={handleLogOut}
        leadingIcon="logout"
        title="Logout"
        style={{
          height: 40,
        }}
      />
    </Menu>
  );
};

export default CustomMenu;
