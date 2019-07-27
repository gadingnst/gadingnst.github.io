# About Jekyll

Some time ago I stopped using traditional help authoring tools because I found them too restrictive and separated from mainstream web development. Instead, I switched to Jekyll.

Jekyll is one of the most popular static site generators used today. Static site generators are database-free websites that populate all the pages with content locally before you publish the files on your web server. Jekyll is open source, free, easy to use, and extremely flexible.

You can use Jekyll to author and publish your help docs instead of using a traditional help authoring tool like Flare, RoboHelp Author-it, or a DITA-based tool such as Oxygen XML. You can do just about everything with Jekyll and more. Whether you need conditional filtering, content re-use, variables, multiple outputs, multiple sidebars, templates, or even PDF output, you can accomplish it using Jekyll, particularly when using the Documentation theme for Jekyll I developed. For more details, see the list of supported features.

# About Ruby on Rails

Ruby on Rails is an application stack that provides developers with a framework to quickly create a variety of web applications.

Ruby on Rails does take a little while to install on a virtual server, but luckily there are a lot of helpful tools to make this process as easy as possible. You can run this tutorial on your droplet as a user with sudo privileges. You can check out how to set that up here:

## Arch Linux Server Setup

#### 1. Step One— Install Ruby with RVM

Before we do anything else, we should run a quick update to make sure that all of the packages we download to our VPS are up to date:

> pacman -Sy

Once that's done, we can start installing RVM, Ruby Version Manager. This is a great program that lets you use several versions of Ruby on one server; however, in this case, we will just use it to install the latest version of Ruby on the droplet.

If you do not have curl on your system, you can start by installing it:

> pacman -S curl

To install RVM, open terminal and type in this command:

> curl -L get.rvm.io | bash -s stable

After it is done installing, open your .bashrc file

> nano .bashrc

and add this to the end:

> [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

This will load RVM on startup. To apply the changes, exit your session and log back in.

In order to work, RVM has some of its own dependencies that need to be installed. Arch Linux will install these for you with

> rvm requirements

#### 2. Step Two—Install Ruby

Before installing Ruby, you need to install libyaml if you plan on installing Rails (you can do this later, but you'll need to reinstall Ruby if you do).

> sudo pacman -S libyaml

installing Ruby with RVM is easy.

> rvm install 2.5.0

Ruby is now installed. However, since we accessed it through a program that has a variety of Ruby versions, we need to tell the system to use 2.5.0 by default.

> rvm use 2.5.0 --default

#### 3. Step Three—Install RubyGems

The next step makes sure that we have all the required components of Ruby on Rails. We can continue to use RVM to install gems; type this line into terminal.

> rvm rubygems current

#### 4. Step Four—Install Rails

Once everything is set up, it is time to install Rails. To start, open terminal and type in:

> gem install rails

This process may take a while, be patient with it. Once it finishes you will have Ruby on Rails installed on your droplet.

Once Ruby on Rails is installed in full on your virtual server, you can check which version of each you are using:

> ruby -v

> rails -v

#### 5. Step Five - Install Sass, Bundler, and Jekyll

1. First, update your gem
> gem update

2. After, updated gem, try to install sass and jekyll by following this command:
> gem install sass bundler jekyll jekyll-paginate jekyll-feed jekyll-seo-tag minima pygments.rb  

3. Once Jekyll is installed in full on your virtual server, you can check which version of each you are using:
> jekyll -v
