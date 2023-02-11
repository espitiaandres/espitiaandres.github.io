import Modal from "ui/components/Modal/Modal";
import { Link } from "components/Projects/ProjectsHelpers";
import AstronautJellyfish from "assets/images/projects/webp/astronaut jellyfish.webp";
import clsx from "clsx";

interface CardProps {
  i: number;
  header?: string;
  description?: string;
  buttonText?: string;
  links: Link[];
  image?: string;
  withModal?: boolean;
  withText?: boolean;
}

export default function Card({
  i,
  header = "",
  description = "",
  buttonText = "See More",
  links,
  image = AstronautJellyfish,
  withModal = false,
  withText = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "card bg-base-100 shadow-xl border-white border-2 dark:text-black",
        {
          "w-8/12 md:w-11/12 lg:w-full": withText,
          "w-full": !withText,
        }
      )}
    >
      <figure>
        <label htmlFor={`my-modal-${i}`} className="w-full h-full">
          <img
            src={image}
            className={clsx("object-cover w-full rounded-2xl", {
              "h-40": withText,
              "h-96": !withText,
            })}
            alt={image}
            loading="lazy"
          />
        </label>
      </figure>
      {withText && (
        <div className="card-body h-64">
          <div className="text-2xl font-semibold truncate ..." title={header}>
            {header}
          </div>
          <div className="line-clamp-4" title={description}>
            {description}
          </div>
          {withModal && (
            <div className="card-actions justify-end absolute bottom-4 right-4">
              <label
                htmlFor={`my-modal-${i}`}
                className="btn btn-outline btn-primary"
              >
                {buttonText}
              </label>
            </div>
          )}
        </div>
      )}
      {withModal && (
        <Modal
          header={header}
          description={description}
          i={i}
          links={links}
          image={image}
          withText={withText}
        />
      )}
    </div>
  );
}
