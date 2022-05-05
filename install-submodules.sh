git submodule add https://github.com/BrightcoveLearning/s-scripts
cd _includes
git submodule add https://github.com/BrightcoveLearning/s-cloudplayout
git submodule add https://github.com/BrightcoveLearning/s-ott-plugins
git submodule add https://github.com/BrightcoveLearning/s-publishing-apps
git submodule add https://github.com/BrightcoveLearning/s-general
cd ..
cd assets/images
git submodule add https://github.com/BrightcoveLearning/s-ott-plugins-img
git submodule add https://github.com/BrightcoveLearning/s-cloudplayout-img
git submodule add https://github.com/BrightcoveLearning/s-publishing-apps-img
git submodule add https://github.com/BrightcoveLearning/s-general-img
cd ..
git submodule update --init --recursive