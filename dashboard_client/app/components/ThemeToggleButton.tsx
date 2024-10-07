import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button  style={{ borderRadius: '0px 20px 20px 0px' }}
                onClick={toggleColorMode}
                aria-label="Toggle theme">
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
    );
};

export default ThemeToggleButton;
