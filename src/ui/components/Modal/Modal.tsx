import { Link } from "ui/common/types";
import clsx from "clsx";

interface ModalProps {
  i: number;
  header?: string;
  description?: string;
  buttonText?: string;
  links: Link[];
  image?: string;
  withText?: boolean;
}

const Modal = ({
  header,
  description,
  buttonText = "Close",
  i,
  links,
  image,
  withText = false,
}: ModalProps) => {
  return (
    <div>
      <input type="checkbox" id={`my-modal-${i}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box min-w-5xl">
          <figure className="rounded">
            <img
              src={image}
              className={clsx("object-cover w-full", {
                "h-28 sm:h-40": withText,
                "h-full": !withText,
              })}
              alt={image}
            />
          </figure>
          <div>
            <div className="font-bold text-3xl pt-4">{header}</div>
            <div className="py-4">{description}</div>
            {links.map((l) => (
              <div>
                <a
                  className="link link-primary link-hover font-medium"
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - {l.name}
                </a>
              </div>
            ))}
          </div>
          <div className="modal-action">
            <label
              htmlFor={`my-modal-${i}`}
              className="btn btn-outline btn-primary"
            >
              {buttonText}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
