import * as css from "../../Styles/RecipePaginationCss";
import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Image,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";

const Pagination = ({ totalPages, page: current, setPage: setCurrent }) => {
  const [val, setVal] = useState(current);

  useEffect(() => {
    setVal((prev) => current);
  }, [current]);

  useEffect(() => {
    if (current == 0) {
      setCurrent(1);
    }
  }, []);

  useEffect(() => {
    if (totalPages != 1) {
      if (current > totalPages) {
        setCurrent((prev) => totalPages);
      }
    }
    if (current == 0) {
      setCurrent(1);
    }
  }, [totalPages]);

  const onPageChange = (page) => {
    console.log(page);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePageChange();
      setCurrent((prev) => val);
    }
  };

  const handlePageChange = () => {
    let pageNumber = parseInt(current, 10);
    if (isNaN(pageNumber) || pageNumber <= 0) {
      pageNumber = 1;
    } else if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    setCurrent(pageNumber.toString());
    onPageChange(pageNumber);
  };

  const handleArrowClick = (val) => {
    setCurrent((prev) => Number(prev) + Number(val));
  };

  return (
    <Box css={css.Outer}>
      <Box color="gblack" css={css.ArrowConts}>
        <Image
          css={current <= 1 ? css.hiddenArrowCss : css.Arrows}
          onClick={() => setCurrent(1)}
          as={BiChevronsLeft}
        />
        <Image
          onClick={() => handleArrowClick(-1)}
          css={current <= 1 ? css.hiddenArrowCss : css.Arrows}
          as={BiChevronLeft}
        />
      </Box>

      <Box fontFamily="cotoris" css={css.PageCont}>
        <Text css={css.PageText}>Page</Text>
        <Input
          value={val}
          onChange={(e) => {
            setVal((prev) => e.target.value);
          }}
          onKeyDown={handleKeyPress}
          css={css.InputCss}
          type="number"
          _focusVisible="false"
          color="dgreen"
          borderColor="lblack2"
        />
        <Text css={css.PageText}>{`of ${totalPages}`}</Text>
      </Box>

      <Box color="gblack" css={css.ArrowConts}>
        <Image
          onClick={() => handleArrowClick(1)}
          css={current >= totalPages ? css.hiddenArrowCss : css.Arrows}
          as={BiChevronRight}
        />
        <Image
          onClick={() => setCurrent(totalPages)}
          css={current >= totalPages ? css.hiddenArrowCss : css.Arrows}
          as={BiChevronsRight}
        />
      </Box>
    </Box>
  );
};

export default Pagination;
