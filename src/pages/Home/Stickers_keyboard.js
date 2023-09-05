import React from 'react';
import "./Stickers_keyboard.css"
import {Grid} from "@mui/material";

const StickersKeyboard = ({ onStickerSelect }) => {
    const keyboardLayout = [
        ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😇', '😈', '👿', '😉'],
        ['😊', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕'],
        ['😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡'],
        ['😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭'],
        ['😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '🙁', '🙂'],
        ['🙃', '🙄', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🤖', '🤗', '🤘', '🦄'],
        ['💩', '👻', '💀', '👽', '👾', '🤖', '👶', '👦', '👧', '👨', '👩', '👪'],
        ['👫', '👬', '👭', '💏', '💑', '👯', '🙇', '💁', '🙅', '🙆', '🙋', '🙎'],
    ];

    const handleStickerClick = (sticker) => {
        onStickerSelect(sticker);
    };

    return (
        <Grid container flexDirection={"column"} flexWrap={"nowrap"}>
            {keyboardLayout.map((row, rowIndex) => (
                <Grid item container flexDirection={"row"} key={rowIndex}>
                    {row.map((sticker, stickerIndex) => (
                        <Grid item key={stickerIndex}>
                            <button
                                className="app__home_sticker-keyboard-button"
                                onClick={() => handleStickerClick(sticker)}
                            >
                                {sticker}
                            </button>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
}

export default StickersKeyboard;