*This document is currently under revision...*

# Animating Still Images Using GANS AND CNNS

This project was completed as part of APS360, Applied Fundamentals of Deep Learning, a course offered at the University of Toronto. The following description is an abridged version of the final report written as part of the course.

*In collaboration with Tyler Yan, Shivansh Sing, and Brett Yang.*

![Animating birds using GANs](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/bird.gif?raw=true)\
*Results from our project*
<br></br>

## Overview
___

Inspired by the moving portraits found in Harry Potter, we wanted to train a machine learning model that could animate a still image into a complex movement. After conducting some background research into current technologies, we found models that could animate a part of an image, such as a waterfall, and models capable to taking a face as input, and map into to a target animation. We were highly intrigued by this concept of a reference image and a target animation. To take it a step further, we decided to try this technique on an object with a slightly more complex movement: a bird. 

Animation is simply a bunch of frames put together one after the other. To animate a bird, then, we require multiple images of a bird transitioning through the flying motion. GANs are a type of model known for their ability to generate seemingly new images that closely represent the training data distribution. As such, our proposed pipeline takes in an image of a bird sitting, and by using a GAN and target frames, we generate an animation of that bird flying. Here's an overview of our pipeline:

![A flowchart illustrating the bird animation pipeline](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/flowchart_overview.png?raw=true)\
*An overview of our proposed pipeline, starting from an input image of a bird and outputting a GIF of that bird flying*
<br></br>

### Data Processing

For our dataset, we started off by finding videos of birds flying from YouTube. For our model, we needed massive amounts of data (frames) to train since our model is a GAN, a model well-known for its large data requirements for decent outputs.

We wrote a simple Python script to split the videos into separate frames to use for our model. GANs require high-quality data with minimal noise, so we had to clean this dataset before training by using YOLOv8’s object detection model to crop the frames around the birds This allowed the model to train only on the isolated bird’s flying motion and to ignore any background noise and other objects in the frame. 

![A flowchart describing our data collection and processing pipeline](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/flowchart_processing.jpg?raw=true)\
*Data collection and processing pipeline*
<br></br>

After we had finished the first round of data preprocessing we had around 10000 frames for our model to train on. Although this seems like a large dataset, our model still wasn’t able to train properly. So, we decided to find other sources of data to increase the size of our dataset. We found the CUB200 dataset on Kaggle which was perfect for use case. This dataset had frames of singular birds on the ground and in the air. This dataset consisted of only single birds in the frame, so we could freely run YOLOv8 to crop the image around the bird. After compiling and cleaning data from these sources we ended up with around 18000 frames for our model. We decided to use 90% of the images for training and 10% for testing.

### Training a GAN


## Baseline Model
___


![A visual representation of model architecture behind DCGAN](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/DCGAN.png?raw=true)\
*Deep convolutional generative adversarial network architecture*


The baseline model we decided to use was a Deep Convolutional Generative Adversarial Network or DCGAN for short. We chose this model because our problem requires us to create similar images to an input image, and CNNs are widely known for their success with image-based tasks. A GAN consists of two main components, a generator and a discriminator. Generator loss is updated by passing generated images labeld as "real" into the discriminator. Discriminator loss is updated by taking the average loss of passing real images with the "real" labels and fake images with the "fake" labels into the discriminator. Both the generator and discriminator use batch normalization and the LeakyReLU function in between layers to improve accuracy, to speed up training, and to avoid the dying ReLU problem. As seen above, our generator contains 5 transpose convolutional layers to upsample a vector containing random noise to an image, and our discriminator contains 5 convolutional layers to break down an image to predict whether the image is real or fake.

![Output of a DCGAN trained on bird images](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/dcgan_results.png?raw=true)\
*Image generation results of DCGAN at epoch 0, epoch 20, and epoch 100*
<br></br>

### Problems with our baseline model


## Primary Model - StyleGAN2-ADA



#### Results

![Five images of randomly generated birds](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/rand_gen.png?raw=true)\
*Randomly generated samples of birds from the network we trained*
<br></br>


### Style mixing operator

![A visual representation of style mixing](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/style_mixing.png?raw=true)\
*Visual results created from the style mixing operator*
<br></br>

### Animation pipeline

![An overview of the animation pipeline used to go from an image of a bird to a video of that bird flying](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/animation_pipeline.png?raw=true)\
*The animation pipeline that samples from a learned smooth data distribution*
<br></br>


![A representation of the output frames from the bird animation pipeline](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/birds/flying_sequence.png?raw=true)\
*Source image passed through the animation pipeline. Four frames have been sampled at spaced intervals from the video*
<br></br>