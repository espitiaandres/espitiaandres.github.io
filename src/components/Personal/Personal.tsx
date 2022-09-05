//
//  Personal.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const AboutMe = () => {
  return (
    <div
    // className="animate__animated animate__fadeIn animate__delay-0.3s"
    >
        {/* TODO: this is a possible card component to use for pictures*/}
        <div className="card card-compact w-96 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div>test</div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default AboutMe;
