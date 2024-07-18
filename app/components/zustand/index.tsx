import { Box, Spinner, Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Form } from "./Form";

export function ZustandPlayground() {
  return (
    <Stack gap={2} m={4} p={4} border="5px solid #000">
      <h1>Zustand Form Implementation</h1>
      <Box>
        <Suspense fallback={<Spinner />}>
          <Form />
        </Suspense>
      </Box>
    </Stack>
  );
}
