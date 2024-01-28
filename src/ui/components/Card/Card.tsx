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
  roundedImage?: boolean;
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
  roundedImage = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "card bg-white shadow-xl dark:border-white dark:border-2 dark:text-white dark:bg-zinc-900",
        withText ? "w-8/12 md:w-11/12 lg:w-full" : "w-full"
        // withModal ? "border-white border-2" : ""
      )}
    >
      <figure>
        <label htmlFor={`my-modal-${i}`} className="w-full h-full">
          <img
            src={image}
            className={clsx(
              "object-cover w-full",
              withText ? "h-40" : "h-96",
              roundedImage ? "rounded-2xl" : ""
            )}
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
