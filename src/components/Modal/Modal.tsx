import { Link } from "../Projects/ProjectsHelpers";

type ModalProps = {
  header: string;
  description: string;
  buttonText?: string;
  i: number;
  links: Link[];
};

const Modal = ({
  header,
  description,
  buttonText = "Close",
  i,
  links,
}: ModalProps) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${i}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
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
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
