import { useMemo } from "react";

export const useSortedProducts = (catalogProducts, selectedSort) => {
  const sortedProducts = useMemo(() => {

    if(selectedSort === 'default') {
      return catalogProducts;
    } else if (selectedSort === 'highestPrice') {
      return [...catalogProducts].sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'lowestPrice') {
      return [...catalogProducts].sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'rating') {
      return [...catalogProducts].sort((a, b) => b.rating - a.rating);
    } else {
      return [...catalogProducts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    } 
  }, [selectedSort, catalogProducts])

  return sortedProducts
}


export const useProducts = (
  catalogProducts, selectedSort, selectedStyle, selectedBrands, selectedColors, selectedMaterials, minPrice, maxPrice
) => {
  
  const sortedProducts = useSortedProducts(catalogProducts, selectedSort);

  const sortedAndFilteredProducts = useMemo(() => {
    let filteredProducts = sortedProducts;

    filteredProducts = filteredProducts.filter(product => minPrice <= product.price && maxPrice >= product.price);    

    if (selectedStyle.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedStyle.includes(product.style));    
    } 
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));    
    }
    if (selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedColors.includes(product.color));    
    }
    if (selectedMaterials.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedMaterials.includes(product.material));    
    }



    return filteredProducts;
  }, [sortedProducts, selectedStyle, selectedBrands, selectedColors, selectedMaterials, minPrice, maxPrice]);

  return sortedAndFilteredProducts;
};

