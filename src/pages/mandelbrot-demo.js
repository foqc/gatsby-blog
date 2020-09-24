import React from "react"
import Layout from '../components/layout'
import Mandelbrot from '../assets/demo/mandelbrot'
import SEO from '../components/seo'

class Demo extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        Mandelbrot(canvas)
    }
    render() {
        return (
            <Layout>
                <SEO title={'Mandelbrot Demo'}
                    loadDemoImage={true}
                    description={'In this demo a menadelbrot set is implemented and plotted using Canvas and JavaScript...'} />
                <h1>Mandelbrot Demostration</h1>
                <p>The Mandelbrot set has become popular outside mathematics both for its aesthetic appeal and as an example of a complex
                structure arising from the application of simple rules. It is one of the best-known examples of mathematical visualization
                and mathematical beauty.</p>
                <p>
                    In this demo a menadelbrot set is implemented and plotted using Canvas and JavaScript.
                </p>
                <em>Click on a specific point in the image to zoom in</em>

                <canvas ref="canvas" className="canvas-mandelbrot" />
            </Layout>
        )
    }
}
export default Demo