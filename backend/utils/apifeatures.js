class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const querycopy = { ...this.queryStr };

    console.log(querycopy);
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((el) => delete querycopy[el]);

    //filter
    let queryStr = JSON.stringify(querycopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    console.log(querycopy);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resperpage) {
    const currentpage = Number(this.queryStr.page) || 1;
    const skip = resperpage * (currentpage - 1);

    this.query = this.query.limit(resperpage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
