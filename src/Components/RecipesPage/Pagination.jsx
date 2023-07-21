import * as css from "../../Styles/RecipePaginationCss";
import { useState, useEffect } from "react";
import { Box, Text, Button, Input, Image } from "@chakra-ui/react";

import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";

const Pagination = () => {
  const [current, setCurrent] = useState(1);
  const totalPages = 10;

  return (
    <Box css={css.Outer}>
      <Box css={css.ArrowConts}>
        <Image css={css.Arrows} as={BiChevronsLeft} />
        <Image css={css.Arrows} as={BiChevronLeft} />
      </Box>

      <Box css={css.PageCont}>
        <Text css={css.PageText}>Page</Text>
        <Input
          value={current}
          type="number"
          css={css.InputCss}
          _focusVisible="false"
          color="dgreen"
          borderColor="lblack2"
        />
        <Text css={css.PageText}>{`of ${totalPages}`}</Text>
      </Box>

      <Box css={css.ArrowConts}>
        <Image css={css.Arrows} as={BiChevronRight} />
        <Image css={css.Arrows} as={BiChevronsRight} />
      </Box>
    </Box>
  );
};

export default Pagination;
