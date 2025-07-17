
// //Sections Data in Array
var HomeData = [
  {"url": './assets/charts/index1.html',"heading": "1-Total Number of Victims over the Years", "desc": "The bar plot is showing the distribution of total victims of mass shootings in the USA over the years. Each bar represents a year, and its height corresponds to the total number of victims. The plot uses different colors for each year and includes a colorbar. The plot provides a visual representation of how the total number of victims has changed over the years."},
  {"url": './assets/charts/index2.html',"heading": "2-Total Victims by State", "desc": "The bar plot is showing the total number of victims of mass shootings in different states across the USA. Each state is represented on the x-axis, and the corresponding total number of victims is represented on the y-axis. The plot uses a color gradient to distinguish between states and includes hover information displaying the state name and total number of victims."},
  {"url": './assets/charts/index2-2.html',"heading": "3-Number of Shooting Events by State,", "desc": "The bar plot is showing the total number of shooting events with respect to every state across the USA. Each state is represented on the x-axis, and the corresponding total number of shooting events on the y-axis. The plot uses a color gradient to distinguish between states and includes hover information displaying the state name and total number of shooting events."},
  {"url": './assets/charts/index11.html',"heading": "4-3D Scatter Plot of Total Victims, Prior Signs of Mental Illness, and Number of Weapons", "desc": "The 3D scatter plot visualizing the relationship between the total number of victims, prior signs of mental illness, and the year of mass shootings in the USA. The x-axis represents the total number of victims, the y-axis represents the presence of prior signs of mental illness, and the z-axis represents the year. Each data point is color-coded based on the number of weapons used in the shooting incidents."},

  // Add more data here if needed
];

var RegData = [
  {"url": './assets/charts/index3.html',"heading": "1-Actual VS Predicted Fatalities evaluation using XGBoost Regressor", "desc": "The XGBoost regressor model is trained using the available data. The dataset is preprocessed by one-hot encoding categorical variables and splitting it into features (X) and the target variable (y). The data is then split into training and testing sets using the `train_test_split` function. The XGBoost model is instantiated and fitted on the training data using the `fit` method. Once the model is trained, it is used to make predictions on the test set using the `predict` method. The predicted values (`y_pred`) are then compared to the actual values (`y_test`). In the scatter plot the blue points represent the actual and predicted fatalities. Each point on the scatter plot corresponds to an instance from the test set. The x-coordinate of each point represents the actual number of fatalities (`Actual`), while the y-coordinate represents the predicted number of fatalities (`Predicted`). By examining the dispersion of the points around the diagonal line (y = x), we can evaluate the accuracy of the predictions.The red dotted line, also known as the trendline, is added to the scatter plot to depict the expected relationship between the actual and predicted values."},
  {"url": './assets/charts/index4.html',"heading": "2-Actual VS Predicted Fatalities evaluation using Gradient Boosting Regressor", "desc": "In this scatter plot , the Gradient Boosting Regressor model is visluzied. Predictions are made on the encoded test data using `predict`, and the predicted values (`y_pred`) are obtained. Finally, the results are visualized using a scatter plot. The actual fatalities are represented by blue markers, while the predicted fatalities are represented by red markers. The x-axis represents the year. The visualization provides a comparison between the actual and predicted fatalities."},
  // {"url": './assets/charts/index5.html',"heading": "Fatalities  Prediction from 2022 to 2025 using Linear Regression with respect to  Number of Weapons and Prior Sign of Mental Illness", "desc": "The scatter plot visualizes the data and predictions related to fatalities in USA mass shootings. The plot includes historical data points, a regression line representing the predicted trend, and markers for future predictions. It includes existing data points, a regression line representing the trend, and markers indicating future predictions. "},
];

var ClusterData = [
  {"url": './assets/charts/index6.html',"heading": "1-Clustering of States based on Total Victims","desc": "The scatter plot visualizing the clustering results of states based on the total number of victims in mass shootings in the USA. The five clusters are obtained by iteratively assigning states to the cluster with the nearest mean (centroid) and updating the centroids based on the newly assigned states. This process continues until convergence, where the assignments and centroids stabilize. The algorithm aims to minimize the within-cluster sum of squares, meaning it tries to create clusters where the states within each cluster are similar to each other in terms of total victims. The resulting clusters represent groups of states that exhibit similar patterns in terms of total victims in mass shootings."},
  // {"url": './assets/charts/index7.html',"heading":"", "desc": "The scatter plot visualizing the clustering results of states based on the total number of victims in mass shootings in the USA. Each state is represented on both the x-axis and y-axis. The color of each data point represents its assigned clusters based on Total Victims."},
  {"url": './assets/charts/index8.html',"heading":"2-Clusters on the basis of Year, Gender, Shooting Type, Race, Prior Sign Of Mental Illness", "desc": "The scatter plot is visulizing k-means clustering to a dataset with categorical features 'Gender', 'Shootingtype', 'Race', 'Priorsignsofmentalillness'. The resulting clusters group instances with similar patterns in these variables. Categorical data is encoded using one-hot encoding, and k-means assigns cluster labels based on similarity. A new column, 'YearIntervals', is created by binning the 'Year' column. The clusters are visualized in a scatter plot, representing instances based on 'State' and 'Year' and colored/symbolized by the assigned cluster. This analysis provides insights into patterns and trends in mass shootings based on the considered categorical features."},
   {"url": './assets/charts/index9.html',"heading":"3-Clustering using PCA on Gender, Shooting Type, Race, State, Year, Fatalities, Wounded, Total Victims, Prior Signs of Mental Illness, Location Type, Weapons Obtained Legally, Number of Weapons, and Assault", "desc": "The scatter plot is visulizing the CLusters. For this purpose relevant features for clustering are selected from the dataset, including 'Gender', 'Shootingtype', 'Race', 'State', 'Year', 'Fatalities', 'Wounded', 'Totalvictims', 'Priorsignsofmentalillness', 'Locationtype', 'Weaponsobtainedlegally', 'Numweapons', and 'Assault'. Categorical features are one-hot encoded using 'pd.get_dummies' to convert them into numerical values suitable for clustering. The encoded data is standardized using the StandardScaler to ensure that each feature has a similar scale, which is necessary for some clustering algorithms. PCA (Principal Component Analysis) is applied to reduce the dimensionality of the scaled data to two components while preserving the most important information. The reduced data is then clustered using the AgglomerativeClustering algorithm with a specified number of clusters (in this case, 5). This algorithm starts with each instance as a separate cluster and iteratively merges them based on the similarity between clusters. Cluster labels are assigned to each instance based on the clustering results obtained from the Agglomerative Clustering algorithm."},
  {"url": './assets/charts/index10.html',"heading":"4-Clusters on the basis of Gender, Shooting Type, Race, Prior Sign Of Mental Illness with Respect to Location Type and States","desc": "The scatter plot is visulizing k-means clustering to a dataset with categorical features. The categorical features ('Gender', 'Shootingtype', 'Race', 'Priorsignsofmentalillness') are one-hot encoded. This encoding transforms the categorical data into a numerical format suitable for clustering. An instance of the k-means clustering algorithm is created with five clusters using the 'KMeans' class. This assigns cluster labels to each instance, indicating which cluster it belongs to based on similarity in the categorical feature patterns."},
];

var PcData = [
  {"url": './assets/charts/index12.html',"heading":"1-USA Mass Shootings: 2 PCA Scatter Plot", "desc": "The scatter plot is showing the code implementation of dimensionality reduction using Principal Component Analysis (PCA) on a dataset that includes categorical and numerical features. Categorical variables ('GENDER', 'SHOOTINGTYPE', 'RACE', 'STATE', 'LOCATIONTYPE') are one-hot encoded to convert them into binary columns. Numerical features ('YEAR', 'FATALITIES', 'WOUNDED', 'TOTALVICTIMS', 'PRIORSIGNSOFMENTALILLNESS', 'WEAPONSOBTAINEDLEGALLY', 'NUMWEAPONS', 'ASSAULT') are normalized using z-score normalization. PCA is then applied to the preprocessed dataset, resulting in two principal components, PC1 and PC2. These components capture the most significant variation in the data and are used to create a scatter plot. The scatter plot visualizes the transformed data, where each data point represents an instance projected onto PC1 and PC2. It provides insights into the relationships, patterns, and clusters within the dataset based on the considered features. The visualization helps identify similarities or differences between instances and understand the underlying structure of the data in a lower-dimensional space."},
  {"url": './assets/charts/index13.html',"heading":"2-USA Mass Shootings: 3 PCA 3D Scatter Plot", "desc": "To obtain the PCA components, the code first initializes a PCA object with the desired number of components, which in this case is set to 3. Then, the fit_transform() method is called on the dataset (df), which performs the PCA transformation and returns the transformed data in the lower-dimensional space. The resulting PCA components are stored in the df_pca DataFrame with columns named 'PC1', 'PC2', and 'PC3', representing the three principal components. The 3D scatter plot created using Plotly (px.scatter_3d) visualizes the dataset in the reduced PCA space. Each point in the plot represents an instance from the dataset, where the coordinates along the three axes (PC1, PC2, and PC3) correspond to the transformed values of the instance in the lower-dimensional space. This plot allows for the exploration and understanding of the relationships and patterns in the dataset after dimensionality reduction using PCA."},

];



// ...

// Display Home Charts
var homeCharts = document.getElementById('homeData');
HomeData.forEach((homeData, index) => {
  var mainPlot = document.createElement('div');
  mainPlot.classList.add('plot-container');

  // Add plot heading
  var plotHeading = document.createElement('h3');
  plotHeading.textContent = homeData.heading; // Changed from homeData.desc to homeData.heading
  plotHeading.classList.add('plot-heading'); // Added the line to add the CSS class
  mainPlot.appendChild(plotHeading);

  var singleChart = document.createElement('embed');
  singleChart.setAttribute('src', homeData.url);

  mainPlot.appendChild(singleChart);
  homeCharts.appendChild(mainPlot);

  var plotDesc = document.createElement('div');
  plotDesc.classList.add('plot-desc');
  plotDesc.textContent = homeData.desc;
  homeCharts.appendChild(plotDesc);
});



// // Display Home Charts
// var homeCharts = document.getElementById('homeData');
// HomeData.forEach((homeData, index) => {
//   var mainPlot = document.createElement('div');
//   mainPlot.classList.add('plot-container');

//   // Add plot heading
//   var plotHeading = document.createElement('h3');
//   plotHeading.textContent = homeData.heading; // Use the heading from the data object
//   plotHeading.classList.add('plot-heading');
//   mainPlot.appendChild(plotHeading);

//   var singleChart = document.createElement('embed');
//   singleChart.setAttribute('src', homeData.url);

//   mainPlot.appendChild(singleChart);
//   homeCharts.appendChild(mainPlot);

//   var plotDesc = document.createElement('div');
//   plotDesc.classList.add('plot-desc');
//   plotDesc.textContent = homeData.desc;
//   homeCharts.appendChild(plotDesc);
// });



//Display Regression Charts


var regCharts = document.getElementById('regData');
RegData.forEach(regData => {
  var mainPlot = document.createElement('div');
  mainPlot.classList.add('plot-container');
  
  // Add plot heading
  var plotHeading = document.createElement('h3');
  plotHeading.textContent = regData.heading;
  plotHeading.classList.add('plot-heading');
  mainPlot.appendChild(plotHeading);

  var singleChart = document.createElement('embed');
  singleChart.setAttribute('src', regData.url);

  mainPlot.appendChild(singleChart);
  regCharts.appendChild(mainPlot);

  var plotDesc = document.createElement('div');
  plotDesc.classList.add('plot-desc');
  plotDesc.textContent = regData.desc;
  regCharts.appendChild(plotDesc);
});





// var regCharts = document.getElementById('regData');
// RegData.forEach(RegData => {
//   var mainPlot = document.createElement('div');
//   mainPlot.classList.add('plot-container');
//   var singleChart = document.createElement('embed');

//   Object.entries(RegData).forEach(entry => {
//     singleChart.setAttribute('src', RegData.url);
//   })

//   mainPlot.appendChild(singleChart);
//   regCharts.appendChild(mainPlot);

//   var plotDesc = document.createElement('div');
//   plotDesc.classList.add('plot-desc');
//   plotDesc.textContent = RegData.desc;
//   regCharts.appendChild(plotDesc);
// });

// //Display Cluster Charts
// var clusterCharts = document.getElementById('clusterData');
// ClusterData.forEach(ClusterData => {
//   var mainPlot = document.createElement('div');
//   mainPlot.classList.add('plot-container');
//   var singleChart = document.createElement('embed');

//   Object.entries(ClusterData).forEach(entry => {
//     singleChart.setAttribute('src', ClusterData.url);
//   })

//   mainPlot.appendChild(singleChart);
//   clusterCharts.appendChild(mainPlot);

//   var plotDesc = document.createElement('div');
//   plotDesc.classList.add('plot-desc');
//   plotDesc.textContent = ClusterData.desc;
//   clusterCharts.appendChild(plotDesc);
// });



// var clusterCharts = document.getElementById('clusterData');
// ClusterData.forEach(clusterData => {
//   var mainPlot = document.createElement('div');
//   mainPlot.classList.add('plot-container');
  
//   // Add plot heading
//   var plotHeading = document.createElement('h3');
//   plotHeading.textContent = clusterData.heading;
//   plotHeading.classList.add('plot-heading');
//   mainPlot.appendChild(plotHeading);

//   var singleChart = document.createElement('embed');
//   singleChart.setAttribute('src', clusterData.url);

//   mainPlot.appendChild(singleChart);
//   clusterCharts.appendChild(mainPlot);

//   var plotDesc = document.createElement('div');
//   plotDesc.classList.add('plot-desc');
//   plotDesc.textContent = clusterData.desc;
//   clusterCharts.appendChild(plotDesc);
// });


var clusterCharts = document.getElementById('clusterData');
ClusterData.forEach(clusterData => {
  var mainPlot = document.createElement('div');
  mainPlot.classList.add('plot-container');
  
  // Add plot heading
  var plotHeading = document.createElement('h3');
  plotHeading.textContent = clusterData.heading;
  
  // Apply custom CSS to specific heading
  if (clusterData.url === './assets/charts/index10.html') {
    plotHeading.classList.add('custom-heading');
  } else {
    plotHeading.classList.add('plot-heading');
  }
  
  mainPlot.appendChild(plotHeading);

  var singleChart = document.createElement('embed');
  singleChart.setAttribute('src', clusterData.url);

  mainPlot.appendChild(singleChart);
  clusterCharts.appendChild(mainPlot);

  var plotDesc = document.createElement('div');
  plotDesc.classList.add('plot-desc');
  plotDesc.textContent = clusterData.desc;
  clusterCharts.appendChild(plotDesc);
});


//


var pcCharts = document.getElementById('pcData');
PcData.forEach(pcData => {
  var mainPlot = document.createElement('div');
  mainPlot.classList.add('plot-container');
  
  // Add plot heading
  var plotHeading = document.createElement('h3');
  plotHeading.textContent = pcData.heading;
  plotHeading.classList.add('plot-heading');
  mainPlot.appendChild(plotHeading);

  var singleChart = document.createElement('embed');
  singleChart.setAttribute('src', pcData.url);

  mainPlot.appendChild(singleChart);
  pcCharts.appendChild(mainPlot);

  var plotDesc = document.createElement('div');
  plotDesc.classList.add('plot-desc');
  plotDesc.textContent = pcData.desc;
  pcCharts.appendChild(plotDesc);
});




// //Display PC Charts
// var pcCharts = document.getElementById('pcData');
// PcData.forEach(PcData => {
//   var mainPlot = document.createElement('div');
//   mainPlot.classList.add('plot-container');
//   var singleChart = document.createElement('embed');

//   Object.entries(PcData).forEach(entry => {
//     singleChart.setAttribute('src', PcData.url);
//   })

//   mainPlot.appendChild(singleChart);
//   pcCharts.appendChild(mainPlot);

//   var plotDesc = document.createElement('div');
//   plotDesc.classList.add('plot-desc');
//   plotDesc.textContent = PcData.desc;
//   pcCharts.appendChild(plotDesc);
// });

//Control Top Navigation Tabs
function openPage(evt, pageName) {
  var i, pagecontent, navlinks;
  pagecontent = document.getElementsByClassName("pagecontent");
  for (i = 0; i < pagecontent.length; i++) {
    pagecontent[i].style.display = "none";
  }
  navlinks = document.getElementsByClassName("navlinks");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("Current").click();