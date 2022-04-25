cd _includes
git submodule add https://github.com/BrightcoveLearning/s-cloudplayout
git submodule add https://github.com/BrightcoveLearning/s-ott-plugins
cd ..
cd assets/images
git submodule add https://github.com/BrightcoveLearning/s-ott-plugins-img
git submodule add https://github.com/BrightcoveLearning/s-cloudplayout-img
cd ..
git submodule update --init --recursive
