import clsx from 'clsx';

export default function Button(props) {
    const { children, variant, ...rest } = props;

    // Variant is a class passed as prop to the Button component.
    // It's then passed to clsx to add every relevant className.
    const classes = clsx({
        'btn': true,
    }, variant);

    return (
        <>
            <button className={classes} {...rest}>{children}</button>
        </>
    );
};