function generateHashtag(str) {
      if (str.trim() === "") return false;
     const hashtag = "#" + str
      
     .split(" ") 
      .filter(word => word !== "") 
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(""); 
   
  
    if (hashtag.length > 140) return false;
   
     return hashtag;
   } 

module.exports = generateHashtag;
