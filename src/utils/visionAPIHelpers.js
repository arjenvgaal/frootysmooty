export const submitToGoogle = async (image) => {
  try {
    //this.setState({ uploading: true });
    //let { image } = this.state;
    let body = JSON.stringify({
      requests: [
        {
          features: [
            { type: "OBJECT_LOCALIZATION", maxResults: 10 }
          ],
          image: {
              content: image
          }
        }
      ]
    });
    let response = await fetch(
      "https://vision.googleapis.com/v1/images:annotate?key=" +
      "AIzaSyCApm0j3T1VLEGthWk1ejG01hTdm-mU7oc",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: body
      }
    );

    const responseJSON = await response.json();
    console.log(responseJSON);

    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const parseObjects = (visonJSON) => {
  if (visonJSON) {
    if (visonJSON.responses.length > 0) {
      const objects = visonJSON.responses[0].localizedObjectAnnotations;

      if (objects && objects.length > 0) {
        const filterArray = ['Fruit', 'Food', 'Table'];

        return objects.filter((object) => !filterArray.includes(object.name))
      }
    }
  }

  return [];
};