import getUrl from "../utils/shornter.utils.js";
import Short from "../models/shortner.models.js";
import makeShortCode from "../utils/convertToshort.utils.js";
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, prefix } = req.body;
    console.log("Received original URL:", originalUrl);
    const [shortUrl, shortCode] = getUrl(prefix ?? "");
    
    console.log("Generated short URL:", shortUrl);
    const newShort = new Short({
      originalUrl,
      shortCode,
        shortUrl,
    }); 
    await newShort.save();
    res.status(201).json({ shortUrl, shortCode });
    } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOriginalUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const shortCode = makeShortCode(shortUrl);
    const shortEntry = await Short.findOne({ shortCode });

    if (!shortEntry) {
      return res.status(404).json({ message: "Short URL not found" });
    }
    res.status(200).json({ originalUrl: shortEntry.originalUrl });
  } catch (error) {
    console.error("Error retrieving original URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

