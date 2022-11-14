import { Link } from "../Projects/ProjectsHelpers";

type ModalProps = {
  header: string;
  description: string;
  buttonText?: string;
  i: number;
  links: Link[];
  image?: string;
};

const Modal = ({
  header,
  description,
  buttonText = "Close",
  i,
  links,
  image,
}: ModalProps) => {
  return (
    <div>
      <input type="checkbox" id={`my-modal-${i}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box min-w-5xl">
          <figure className="rounded">
            <img
              src={image}
              className="object-cover h-28 sm:h-40 w-full"
              alt={image}
            />
          </figure>
          <div className="font-bold text-3xl pt-8">{header}</div>
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
