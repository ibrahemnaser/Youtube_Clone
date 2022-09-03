import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

// language
import { useTranslation } from "react-i18next";

const selectedCategory = "New";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-btn"
          style={{
            color: "white",
            backgroundColor: category.name === selectedCategory && "#FC1503",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              margin: "0 15px",
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
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
