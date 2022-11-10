import React from "react";
import UseTitle from "../../Hooks/UseTitle";
import pic from "../../Images/thali.svg";

const AddMenu = () => {
    UseTitle("Add Menu");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const imgURL = form.imgURL.value;
        const desc = form.desc.value;
        const menu = { title, price, img: imgURL, description: desc };

        fetch(`${process.env.REACT_APP_server_url}/add-menu`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(menu),
        })
            .then((res) => res.json())
            .then((data) => {
                e.target.reset();
                console.log(data);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800 ">
                <div className="flex flex-col justify-between items-center">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                            Add Your Menu
                        </h2>
                    </div>
                    <img src={pic} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div>
                        <label htmlFor="title" className="text-sm">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="title"
                            className="w-full p-3 rounded dark:bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-sm">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="price"
                            name="price"
                            className="w-full p-3 rounded dark:bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="img" className="text-sm">
                            Image URL
                        </label>
                        <input
                            id="img"
                            type="text"
                            placeholder="image URL "
                            name="imgURL"
                            className="w-full p-3 rounded dark:bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="desc" className="text-sm">
                            Description
                        </label>
                        <textarea
                            id="desc"
                            rows="3"
                            placeholder="description"
                            name="desc"
                            className="w-full p-3 rounded dark:bg-gray-100"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-lime-400 dark:text-gray-900"
                    >
                        Add Menu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMenu;
