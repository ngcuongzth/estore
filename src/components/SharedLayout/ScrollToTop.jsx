import { ScrollToTopIcon } from '../../utils/icons'
import MyScroll from 'react-scroll-to-top'

const ScrollToTop = () => {
    return (
        <MyScroll
            smooth top={1500}
            className="scroll-custom"
            component={
                <ScrollToTopIcon />
            }
        >
        </MyScroll>
    )
}


export default ScrollToTop