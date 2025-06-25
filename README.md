# shopify-components

Public github repo for OneReview app block code for custom implementations.

### onereview-review-summary.liquid

- should be inserted on a product template page
- depends on onereview-stars.liquid

![Review summary .liquid component screenshot](img/onereview-review-summary.png)

### onereview-star-rating.liquid

- should be inserted on a product template page
- depends on onereview-stars.liquid

![Star rating .liquid component screenshot](img/onereview-star-rating.png)

### onereview-general-stars.liquid

- can be inserted on a collection, search or home page

![General stars .liquid component screenshot](img/onereview-collection-stars.png)

### onereview-stars.liquid

- should be included within the app code folder anywhere

![Stars .liquid component screenshot](img/onereview-stars.png)

### Steps for installation

1. Open the theme editor.

2. Create the following files in the "snippets" folder, and copy the related .liquid file from this repo:

- onereview-collection-stars.liquid
- onereview-css.liquid
- onereview-general-stars.liquid
- onereview-home-stars.liquid
- onereview-search-stars.liquid
- onereview-star-rating.liquid
- onereview-stars.liquid

3. Create the following files in the "sections" folder, and copy the related .liquid file from this repo"

- onereview-review-summary.liquid

4. Find you main theme layout.liquid file, and copy the following code, to import onereview-css.liquid file here:

```liquid
{% render 'onereview-css' %}
```

5. Navigate to the Product page you would like to add the "Star Rating" app block to, add the following code to include the star rating app block in the location you would like:

```liquid
{% render 'onereview-star-rating.liquid' %}
```

6. Navigate to the Product page you would like to add the "Review Summary" app block to, add the following code to include the review summary app block in the location you would like:

```liquid
{% section 'onereview-review-summary' %}
```

7. Navigate to the collection page you would like to add the "Collection Stars" app block to, add the following code at the bottom of the page, to render star ratings, below products as they appear:

```liquid
{% render 'onereview-collection-stars.liquid' %}
```
