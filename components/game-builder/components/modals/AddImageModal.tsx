import React from "react";
import Modal from "../Modal";
import ImageUploading from "react-images-uploading";
import useAddImageModal from "../../hooks/useAddImageModal";
import Image from "next/image";
import GameDetails from "../../hooks/GameDetails";

const AddImageModal = () => {
  const addImageModal = useAddImageModal();
  const imageModalItemIndex = addImageModal.itemIndex;
  const imageModalInnerItemIndex = addImageModal.innerItemIndex;

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const {setLevelImage,setChoiceImage,setPairingItemImage} = GameDetails();

  const bodyContent = (
    <div className="w-full flex flex-col items-center justify-center  p-[30px] ">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg", "svg"]}
        maxFileSize={1000000}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          <div className="w-full h-full  flex flex-col gap-5 items-center justify-between ">
            <h1 className="text-[25px] text-gray-400 font-semibold ">
              افزودن تصویر
            </h1>
            {images.length == 0 ? (
              <div
                onClick={onImageUpload}
                {...dragProps}
                className={`w-[400px] h-[400px] flex flex-col items-center gap-5 justify-center border-dashed border-[2px] rounded-[25px] cursor-pointer  transition-all duration-300 ${
                  isDragging && "border-purple-600"
                }`}
              >
                {errors ? (
                  <div>
                    {errors.maxNumber && (
                      <span className="text-red-600 text-[16px] font-bold">
                        یه عکس بیشتر نمیتونی آپلود کنی
                      </span>
                    )}
                    {errors.acceptType && (
                      <span className="text-red-600 text-[16px] font-bold">
                        فقط فایل های jpg , png , jpeg , svg میتونی آپلود کنی
                      </span>
                    )}
                    {errors.maxFileSize && (
                      <span className="text-red-600 text-[16px] font-bold">
                        حجم عکست باید حداکثر 1 مگابایت باشه
                      </span>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
                <p className="text-[20px] text-gray-400">
                  اینحا کلیک کن یا عکست رو بکش بیار اینجا
                </p>
              </div>
            ) : (
              <div className=" w-[400px] h-[400px] rounded-[11px] flex items-center justify-center  group transition-all duration-500 ">
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center w-[400px] h-[400px]  rounded-[40px] overflow-hidden"
                  >
                    <Image
                      className=" h-[400px] w-[400px] rounded-[11px] object-fill "
                      src={image["data_url"]}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                    <div className="absolute w-[400px] h-[400px] rounded-[11px] bg-neutral-300 bg-opacity-40  hidden group-hover:flex items-center  gap-2 justify-center transition-all duration-500">
                      <button
                        className="  rounded-[11px] px-6 py-4 bg-white  group/change hover:bg-yellow-50  transition-all duration-500 "
                        onClick={() => onImageUpdate(index)}
                      >
                        <p className="text-[20px] text-gray-400 group-hover/change:text-yellow-500 transition-all duration-500">
                          عوض کردن
                        </p>
                      </button>
                      <button
                        className="  rounded-[11px] px-6 py-4 bg-white  group/remove hover:bg-red-50 transition-all duration-500"
                        onClick={() => onImageRemove(index)}
                      >
                        <p className="text-[20px] text-gray-400 group-hover/remove:text-red-600 transition-all duration-500">
                          پاک کردن
                        </p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
      <div className=" flex w-full justify-center items-center pt-[30px] gap-4">
        <div
          className="w-[190px] h-[62px] rounded-[11px] flex items-center justify-center bg-black cursor-pointer"
          onClick={() => {
            if (images.length == 0) {
              addImageModal.onClose();
            } else {
              imageModalItemIndex == null
                ? setLevelImage(images[0])
                : imageModalInnerItemIndex == null
                ? setChoiceImage(images[0],imageModalItemIndex)
                : setPairingItemImage(
                    images[0],
                    imageModalItemIndex,
                    imageModalInnerItemIndex
                  );
                  setImages([]);
                  addImageModal.onClose();
            }
          }}
        >
          <p className="text-[20px] font-bold text-white">ذخیره تنظیمات</p>
        </div>
        <div
          className="w-[190px] h-[62px] rounded-[11px] flex items-center justify-center bg-[#D7D7D7] cursor-pointer"
          onClick={() => {
            setImages([]);
            addImageModal.onClose();
          }}
        >
          <p className="text-[20px] font-bold text-black">انصراف</p>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={addImageModal.isOpen}
      body={bodyContent}
      onClose={addImageModal.onClose}
    />
  );
};

export default AddImageModal;
