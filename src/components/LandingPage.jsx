import React from 'react';
import { Link } from 'react-router-dom';
import ChooseFilter from '../../public/choose-filter.jpg';
import Pose from '../../public/photobooth-pose.jpg';



const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 text-gray-800">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Capture Moments That <span className="text-pink-500">Matter</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Add filters, take beautiful photos, and preserve fun, spontaneous memories right from your browser.
                    </p>
                    <Link to='/camera' className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                        Get Started
                    </Link>
                </div>
                <div className="mt-10 md:mt-0">
                    <img
                        src="/images/hero-camera.svg"
                        alt="Camera preview illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <img src={ChooseFilter} alt="Choose filter" className="mx-auto mb-4 w-60 h-80 rounded-2xl rotate-270" />
                        <h3 className="text-xl font-semibold mb-2">Choose a Filter</h3>
                        <p>Pick from stunning presets like cinematic, vintage, or vibrant to style your shot.</p>
                    </div>
                    <div className="text-center">
                        <img src={Pose} alt="Pose" className="mx-auto mb-4 w-100 h-60 mt-10 rounded-4xl" />
                        <h3 className="text-xl font-semibold mb-2">Pose & Preview</h3>
                        <p>See yourself live with the filter and make sure everything looks perfect.</p>
                    </div>
                    <div className="text-center">
                        <img src="/images/capture.svg" alt="Capture" className="mx-auto mb-4 w-20 h-20" />
                        <h3 className="text-xl font-semibold mb-2">Capture & Save</h3>
                        <p>Take your photo and download or share it instantly. It’s that simple!</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-200 to-pink-200 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Snapping?</h2>
                <p className="text-lg md:text-xl mb-8">Your camera + stunning filters = unforgettable fun.</p>
                <Link to='/camera' className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                    Launch Camera
                </Link>
            </section>
        </div>
    );
};

export default LandingPage;
