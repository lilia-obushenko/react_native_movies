import React, { useState } from "react";
import { Menu } from "react-native-paper";
import { useRouter } from "expo-router";
import { COLORS, icons } from "../../../constants";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import * as Clipboard from 'expo-clipboard';

const CopyMenu = ({ movie }) => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  const handleCopyLink = () => {
    const movieLink = `https://www.imdb.com/title/${movie.imdb_id}`;

    Clipboard.setString(movieLink);
    closeMenu();
    console.log("Movie link copied to clipboard!");
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <ScreenHeaderBtn
          iconUrl={icons.share}
          dimension="60%"
          handlePress={openMenu}
        />
      }
      backgroundColor={COLORS.orange}
      style={{ marginTop: 50 }}
    >
      <Menu.Item
        onPress={handleCopyLink}
        leadingIcon="content-copy"
        title="Copy movie link"
        style={{
          height: 40,
        }}
      />
    </Menu>
  );
};

export default CopyMenu;
