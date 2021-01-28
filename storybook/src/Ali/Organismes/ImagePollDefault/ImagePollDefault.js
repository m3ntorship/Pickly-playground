import React from "react";
import Avatar from "../../Atoms/Avatar/Avatar";
import PollOptions from "../../Molecules/TapGroup/PollOptions/PollOptions";
import TextInput from "../../Atoms/TextInput/TextInput";
import ImageUpload from "../../Molecules/ImageUpload/ImageUpload";
import Privacy from "../../Molecules/Privacy/Privacy";
import Button from "../../Atoms/TextButton/Button";

const ImagePollDefault = () => {
  return (
    <div className="bg-grey-bg p-l flex justify-center items-center">
      <div className="shadow-dark p-m bg-white rounded-md w-2/3">
        <div>
          <div className="flex items-center">
            <div className="mr-2">
              <Avatar Avatarsize={"Medium"} Userstatus={"Filled"} />
            </div>
            <div>
              <PollOptions
                showImgPoll={true}
                showTextPoll={true}
                showMiniSurvey={true}
              />
            </div>
          </div>
          <div className="mt-m">
            <div>
              <TextInput
                textInputstatus={"Default"}
                textInputPlaceHolder={"Enter Text"}
              />
            </div>
            <div className="mt-m">
              <ImageUpload imageUploadText="Upload one or multiple images" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <Privacy
                  identityText={"Hide my identity"}
                  firstPrivacyOption={"Public"}
                  firstPrivacyOptionAvailable={true}
                  secondPrivacyOption={"Friends"}
                  secondPrivacyOptionAvailable={true}
                  thirdPrivacyOption={"Family"}
                  thirdPrivacyOptionAvailable={true}
                  fourthPrivacyOption={"Private"}
                  fourthPrivacyOptionAvailable={true}
                />
              </div>
              <div>
                <Button
                  textButtonDisabled={true}
                  textButtonsize={"Small"}
                  textButtonvariant={"Primary"}
                  textButtonchildren={"Post"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePollDefault;
