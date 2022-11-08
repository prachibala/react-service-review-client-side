import React from "react";
import UseTitle from "../Hooks/UseTitle";

const Blogs = () => {
    UseTitle("Blog");
    return (
        <section className=" dark:text-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-error">
                    Snack Box
                </p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                    Blogs
                </h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">
                            1. Difference between SQL and NoSQL?
                        </h3>
                        <p className="mt-1 dark:text-gray-400">
                            SQL is the programming language used to interface
                            with relational databases. (Relational databases
                            model data as records in rows and tables with
                            logical links between them). NoSQL is a class of
                            DBMs that are non-relational and generally do not
                            use SQL.!
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">
                            2. What is JWT, and how does it work?
                        </h3>
                        <p className="mt-1 dark:text-gray-400">
                            SON Web Token (JWT) is an open standard (RFC 7519)
                            that defines a compact and self-contained way for
                            securely transmitting information between parties as
                            a JSON object. This information can be verified and
                            trusted because it is digitally signed.!
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">
                            3. What is the difference between javascript and
                            NodeJS?
                        </h3>
                        <p className="mt-1 dark:text-gray-400">
                            JavaScript is a simple programming language that can
                            be used with any browser that has the JavaScript
                            Engine installed. Node. js, on the other hand, is an
                            interpreter or execution environment for the
                            JavaScript programming language.!
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">
                            4. How does NodeJS handle multiple requests at the
                            same time?
                        </h3>
                        <p className="mt-1 dark:text-gray-400">
                            How NodeJS handle multiple client requests? NodeJS
                            receives multiple client requests and places them
                            into EventQueue. NodeJS is built with the concept of
                            event-driven architecture. NodeJS has its own
                            EventLoop which is an infinite loop that receives
                            requests and processes them.!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
