import React from "react";
import "../styles/ImageUploader.scss";
import upload from "../assets/upload.svg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import ImageUploadAPI from "../../api/image_upload";
import { uploadPhotos } from "../../actions/image_upload_actions";
import { Spinner } from "reactstrap";

class ImageUploader extends React.Component {
  //https://music.youtube.com/watch?v=88ZJRcFJ7Wg&list=RDMM9-SY_uUPBcc
  state = {
    isUploading: false
  };
  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file);
    });
    this.props.uploadPhotos(formData);
  };
  render() {
    if (this.props.isUploaded) {
      return (
        <div className="ImageUploader">
          <p>✅</p>
          <p className="ImageUploader__txt">Images uploaded</p>
        </div>
      );
    } else {
      return (
        <div className="ImageUploader">
          {this.props.isLoading ? (
            <Spinner color="#001988" />
          ) : (
            <label htmlFor="multi" className="ImageUploader__label">
              <img alt="" className="ImageUploader__img" src={upload} />
              <input
                onChange={this.onChange}
                type="file"
                id="multi"
                multiple
                size="0"
              />
              <p className="ImageUploader__txt">
                {this.context.t("APP.SELECT_PHOTOS")}
              </p>
            </label>
          )}
        </div>
      );
    }
  }
}
ImageUploader.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  images: state.imageUploadReducer.images,
  isLoading: state.imageUploadReducer.isUploading,
  isUploaded: state.imageUploadReducer.isUploaded
});
const mapDispatchToProps = {
  uploadPhotos: photos => uploadPhotos(photos)
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
