# Ecological Footprint API

This API utilizes a combination of data from the restcountries.eu API as well as a Kaggle database on ecological footprints by country in 2016. By constructing this API, I hope to bring to light the correlation between inequality and environmental impact.

## RESTful Paths

| Method |      Path      | Description                                   |
| ------ | :------------: | --------------------------------------------- |
| GET    |      /all      | Show all countries                            |
| POST   |      /all      | Add a country                                 |
| GET    | /country/:name | Show a country by its name                    |
| GET    |    /excess     | Show all countries with excess biocapacity    |
| GET    |    /deplete    | Show all countries with depleting biocapacity |
| DELETE |    /all/:id    | Delete a country by its ObjectID              |

## Version: 0.1

### /all

#### GET

##### Description:

Returns a list of all countries. Query strings have been implemented on this path and can be utilized to filter by all key-value pairs. Nested properties must be called utilizing dot notation. For any additional queries, separate with '&' character. Please reference the Models section below for a list of all accepted query parameters.

##### Example:

/all?country.region=Africa&hdi=1.0

returns:

```json
{
  "_id": "5e6173b34e0dbd0004934ff5",
  "country": {
    "_id": "5e6173b24e0dbd0004934f02",
    "name": "Botswana",
    "capital": "Gaborone",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2141206,
    "area": 582000,
    "gini": 61,
    "flag": "https://restcountries.eu/data/bwa.svg",
    "__v": 0
  },
  "region": "Africa",
  "hdi": 0.69,
  "gdpPerCapita": "$7,743.50",
  "cropFootprint": 0.3,
  "forestFootprint": 0.24,
  "carbonFootprint": 2.36,
  "ecoFootprint": 3.83,
  "totalBiocapacity": 3.47,
  "biocapacityReserve": -0.35,
  "__v": 0
}
```

#### POST

##### Description:

Will add an additional country to the list. Please note that due to the fact that this API utilizes nested models, any nested fields cannot be input via the post method. I hope to seed future iterations of this API so that the entire body can be input according to it's current model.

### /country/{name}

#### GET

##### Description:

Accepts a parameter 'name' and returns the resulting country. The parameter is not case sensitive.

##### Example

/country/brazil

```json
{
  "_id": "5e61731e9b41b88b129246ba",
  "country": {
    "_id": "5e61731e9b41b88b1292477e",
    "name": "Brazil",
    "capital": "Brasília",
    "region": "Americas",
    "subregion": "South America",
    "population": 206135893,
    "area": 8515767,
    "gini": 54.7,
    "flag": "https://restcountries.eu/data/bra.svg",
    "__v": 0
  },
  "region": "Latin America",
  "hdi": 0.75,
  "gdpPerCapita": "$13,237.60",
  "cropFootprint": 0.62,
  "forestFootprint": 0.6,
  "carbonFootprint": 0.91,
  "ecoFootprint": 3.11,
  "totalBiocapacity": 9.08,
  "biocapacityReserve": 5.97,
  "__v": 0
}
```

### /all/{id}

#### DELETE

##### Description:

Allows user to delete a country from the list utilizing the ObjectID as its parameter.

##### Example:

/all/5e6173b34e0dbd0004934ff5

This path would delete the country Botswana based off its MongoDB ObjectID.

### /excess

#### GET

##### Description:

Returns a list of all countries with an excess biocapacityReserve (greater than 0), meaning their maintain more resources than they expend.

### /deplete

#### GET

##### Description:

Returns a list of all countries with a depleted biocapacityReserve (less than 0), meaning they expend more resources than they have maintained.

## Models Used

I utilized two models to initially seed my data and then re-seeded the data so that country demographic data would be nested within other ecological data.

```Javascript

const Eco = new Schema({
  country: {},
  region: String,
  hdi: Number,
  gdpPerCapita: String,
  cropFootprint: Number,
  forestFootprint: Number,
  carbonFootprint: Number,
  ecoFootprint: Number,
  totalBiocapacity: Number,
  biocapacityReserve: Number
});

const Country = new Schema({
  name: String,
  capital: String,
  region: String,
  subregion: String,
  population: Number,
  area: Number,
  gini: Number,
  flag: String
});

```
