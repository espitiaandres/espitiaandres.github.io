type ModalProps = {
  header: string;
  description: string;
  buttonText?: string;
};

const Modal = ({
  header,
  description,
  buttonText = "See More",
}: ModalProps) => {
  return (
    <div className="card bg-base-100 shadow-xl text-black w-8/12 md:w-11/12 lg:w-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body h-64">
        <div className="text-2xl font-semibold truncate ...">{header}</div>
        <div className="line-clamp-4">{description}</div>
        <div className="card-actions justify-end absolute bottom-4 right-4">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
