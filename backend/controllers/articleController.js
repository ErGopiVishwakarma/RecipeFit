const Article = require("../models/article");

// ------------------------------------------- CREATE ARTICLE ---------------------------------------------------
module.exports.createArticle = async (req, res) => {
    try {
        const { image, heading, subheading, desc, subimage, sideimage, summary, comments } = req.body;

        const article = await Article.create({
            image,
            heading,
            subheading,
            desc,
            subimage,
            sideimage,
            summary,
            comments
        });


        res.status(201).send({ message: "Article created successfully", article: article });
    } catch (err) {
        res.status(500).send({ error: "Failed to create article" });
    }
};

// ------------------------------------------- FETCH ALL ARTICLES ---------------------------------------------------
module.exports.getArticles = async (req, res) => {
    //   try {
    //     const recipes = await Recipe.find();
    //     res.status(200).send(recipes);
    //   } catch (err) {
    //     res.status(500).send({ error: "Failed to fetch recipes" });
    //   }



    try {
        const { heading, subheading, desc, summary, sortBy, sortOrder, page, limit } = req.query;

        console.log(req.query);

        //create empty filter obj
        let filter = {};

        //apply search filters if provided
        if (heading) {
            filter.heading = { $regex: heading, $options: 'i' }
        }

        //apply additional filters
        if (subheading) {
            filter.subheading = { $regex: subheading, $options: 'i' }
        }

        if (desc) {
            filter.desc = { $regex: desc, $options: 'i' }
        }

        if (summary) {
            filter.summary = { $regex: summary, $options: 'i' }
        }

        //create the sort object based on sortBy and sortOrder parameters
        let sort = {};
        if (sortBy && sortOrder) {
            sort = { [sortBy]: sortOrder === "asc" ? 1 : -1 };
        }

        //pagination
        const pageNumber = parseInt(page) || 1;
        const pageSize = parseInt(limit) || 10;
        const skip = (pageNumber - 1) * pageSize;

        const article = await Article.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(pageSize);

        const totalArticleCount = await Article.countDocuments(filter);

        res.status(200).send({ article: article, totalCount: totalArticleCount });

    }
    catch (err) {
        res.status(500).send({ error: "Failed to fetch articles" });
    }
};

// ------------------------------------------- FETCH ARTICLE BY ID ---------------------------------------------------
module.exports.getArticleById = async (req, res) => {
    try {
        const { articleId } = req.params;
        const article = await Article.findById(articleId);

        if (!article) {
            res.status(404).send({ error: "Article not found" });
            return;
        }

        res.status(200).send(article);
    } catch (err) {
        res.status(500).send({ error: "Failed to fetch article" });
    }
};

// ------------------------------------------- UPDATE ARTICLE ---------------------------------------------------
module.exports.updateArticle = async (req, res) => {
    try {
        const { articleId } = req.params;

        const updatedArticle = await Article.findByIdAndUpdate(articleId, req.body, {
            new: true,
        });

        if (!updatedArticle) {
            res.status(404).send({ error: "Article not found" });
        }

        res.status(200).send({ message: "Article updated successfully", article: updatedArticle });
    } catch (err) {
        res.status(500).send({ error: "Failed to update article" });
    }
};