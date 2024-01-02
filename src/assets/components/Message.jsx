import clsx from 'clsx';

// The Message component's purpose is to give feedback to the user whether
// their action was successful or not.
export default function Message({ message }) {
    let classes;
    if (message) {
        classes = clsx({
            'message': true,
            'text-center': true,
            'margin-block-1': true
        });
    }

    return (
        <>
            <p className={classes}>{message.message}</p>
        </>
    );
};