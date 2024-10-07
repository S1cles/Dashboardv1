import { Box, Center, CircularProgress, Text } from '@chakra-ui/react';
import Image from "next/image";

const LoadingPage = () => {
    // const { colorMode } = useColorMode();
    // const bgColor = colorMode === 'light' ? 'gray.800' : 'gray.100';

    return (
        <Box
            width='100vw'
            height='100vh'
            backgroundImage="url('https://i2.wp.com/wallpapercave.com/wp/wp6104803.gif')"
            backgroundSize="cover"
            backgroundPosition="center"
            // bgColor={bgColor}
        >
            <Center height="100vh" flexDirection="column">
                <CircularProgress size={'xs'} isIndeterminate color='purple.300' />
                <Text
                    fontSize="8xl"
                    fontWeight="bold"
                    color={'white'}
                    textShadow={`-1px -1px 0 black, 
                             1px -1px 0 black,
                             -1px 1px 0 black,
                             1px 1px 0 black`}
                >
                    Loading . . .
                </Text>
            </Center>
        </Box>
    );
};

export default LoadingPage;
