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

export default function Modal({
  header,
  description,
  buttonText = "Close",
  i,
  links,
  image,
  withText = false,
}: ModalProps) {
  return (
    <div>
      <input type="checkbox" id={`my-modal-${i}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box min-w-5xl bg-white">
          <figure className="rounded">
            <img
              src={image}
              className={clsx(
                "object-cover w-full",
                withText ? "h-28 sm:h-40" : "h-full",
              )}
              alt={image}
            />
          </figure>
          <div>
            <div className="font-bold text-3xl pt-4">{header}</div>
            <div className="py-4">{description}</div>
            {links.map((l, linkIndex) => (
              <div key={linkIndex}>
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
        <label className="modal-backdrop" htmlFor={`my-modal-${i}`}></label>
      </div>
    </div>
  );
}
