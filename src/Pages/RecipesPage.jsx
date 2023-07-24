import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import BannerRecipePage from "../Components/RecipesPage/BannerRecipePage";
import RecipePageSearch from "../Components/RecipesPage/RecipePageSearch";
import FilterRecipes from "../Components/RecipesPage/FilterRecipes";
import AllRecipesBox from "../Components/RecipesPage/AllRecipesBox";
import Pagination from "../Components/RecipesPage/Pagination";
import { Context } from "../Redux/Context";
import { getData } from "../Redux/Recipes/action";

const RecipesPage = () => {
  const { dispatch, isLoading, recipes, totalPages, isError } =
    useContext(Context);

  // **************************************
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    FixPage(searchParams.get("page"), totalPages)
  );
  const [cate, setCate] = useState(searchParams.getAll("category"));
  const [sort, setSort] = useState(searchParams.get("sort"));
  const [time, setTime] = useState(searchParams.get("time"));
  const [include, setInclude] = useState(searchParams.getAll("include"));
  const [exclude, setExclude] = useState(searchParams.getAll("exclude"));
  const [axiosParams, setAxiosParams] = useState({ page });

  useEffect(() => {
    let params = {
      page,
    };

    if (cate) {
      params.category = cate;
    }
    if (sort == "A - Z") {
      params.sort = "asc";
    } else if (sort == "Z - A") {
      params.sort = "desc";
    } else if (sort == "Highest Rated") {
      params.sort = "rec";
    }
    if (time == "1 hour or less") {
      params.time = "60 mins";
    } else if (time) {
      params.time = time;
    }
    if (include) {
      params.include = include;
    }
    if (exclude) {
      params.exclude = exclude;
    }

    setSearchParams(params);
    // console.log(searchParams.get("time"));
    setAxiosParams(params);
  }, [page, cate, time, include, exclude, sort]);

  useEffect(() => {
    getData(dispatch, axiosParams);
  }, [page]);

  const handleSubmit = () => {
    getData(dispatch, axiosParams);
  };

  useEffect(() => {
    document.title = "Recipes | RecipeSnap";
  }, []);

  return (
    <Box
      paddingBottom={["65px", "80px", "90px"]}
      paddingTop={["65px", "75px", "85px"]}
    >
      {/* Top Banner */}
      <BannerRecipePage />

      {/* Search Bar */}
      <RecipePageSearch />

      {/* Filter */}
      <FilterRecipes
        cate={cate}
        sort={sort}
        time={time}
        include={include}
        exclude={exclude}
        setCate={setCate}
        setSort={setSort}
        setPage={setPage}
        setTime={setTime}
        setInclude={setInclude}
        setExclude={setExclude}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {/* All Recipes Box */}
      <AllRecipesBox page={page} />

      {/* Pagination */}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </Box>
  );
};

export default RecipesPage;

function FixPage(val, totalPages) {
  if (!Number(val)) {
    val = 1;
  }
  if (val <= 0) {
    val = 1;
  }

  return val;
}
