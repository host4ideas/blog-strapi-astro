import readingTime from "reading-time";
import { convertStoMMSS } from "../../../../helpers/convert";

const updateAfterReadingTime = async (event: any) => {
  const { blocks, id } = event.result;

  if (!blocks || !id) return;

  let totalReadSeconds = 0;

  // Add minutes depend of which type of block is
  blocks.forEach((block: any) => {
    switch (block.__component) {
      case "shared.media":
        // Add half a minute
        totalReadSeconds += 30;
        break;

      case "shared.slider":
        // Add half a minute per media file
        totalReadSeconds += Math.round(block.files.length / 2) * 60;
        break;

      case "shared.rich-text":
        totalReadSeconds += readingTime(block.body).minutes * 60;
        break;

      case "shared.quote":
        totalReadSeconds += readingTime(block.body).minutes * 60;
        break;
    }
  });

  await strapi.entityService.update("api::article.article", id, {
    data: {
      readingTime: convertStoMMSS(totalReadSeconds),
    },
  });
};

export default {
  async afterCreate(event: any) {
    await updateAfterReadingTime(event);
  },
  async afterUpdate(event: any) {
    await updateAfterReadingTime(event);
  },
};
