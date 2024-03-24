import { CrossIcon } from 'components/Icons/CrossIcon'
import css from './Contact.module.css'
import { FormComponent } from 'components/Form/Form';

export const Contact = () => {
    return (
        <section className={css.contactSection}>
            <h2 className={css.contactTitle}>Are you in?</h2>
            <div className={css.containerCross}>
                <CrossIcon />
            </div>
            <p className={css.contactText}>Join the YACHT APE community to be one of the first to receive our limited edition NFT</p>
            <FormComponent/>
        </section>
    )
};