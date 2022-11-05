type ModalProps = {
  header: string;
  description: string;
  buttonText?: string;
  i: number;
};

const Modal = ({
  header,
  description,
  buttonText = "Close",
  i,
}: ModalProps) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${i}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="font-bold text-3xl pt-8">{header}</div>
          <div className="py-4">{description}</div>
          <div className="modal-action">
            <label
              htmlFor={`my-modal-${i}`}
              className="btn btn-outline btn-primary"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
