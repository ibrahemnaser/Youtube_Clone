import { Box, Stack } from "@mui/material";
import { categories } from "../utils/constants";

// language
import { useTranslation } from "react-i18next";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        width: { md: "160px" },
      }}
    >
      {categories.map((category, index) => (
        <Box
          component="button"
          key={index}
          className="category-btn"
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          sx={{
            color:
              category.name === selectedCategory
                ? "secondary.contrastText"
                : "primary.contrastText",
            backgroundColor:
              category.name === selectedCategory && "secondary.main",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {t(`categories.${category.name}`)}
          </span>
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
