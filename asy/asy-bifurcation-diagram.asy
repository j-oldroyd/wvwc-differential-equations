import graph;
import fontsize;

// Graph settings
defaultpen(fontsize(9pt));
size(200);

real xmin=-2, xmax=2;
real ymin=-1.2, ymax=3;
real eps = 0.1;
//add(slopefield(dy,(xmin,ymin),(xmax,ymax),20,deepgreen+0.4bp,Arrow));

//plot annotations
arrowbar axisarrow = Arrow(TeXHead);
Label xlabel = Label("$x$", position = EndPoint, align = 2E);
Label ylabel = Label("$y$", position = EndPoint, align = 2N);

real f(real x, real h) {return x^2 + h;}
real fh1(real x) {return f(x, 1);}
path f1 = graph(fh1, xmin, xmax);

draw(f1);

// Draw axes
xaxis(YEquals(0),xmin - eps,xmax + eps, LeftTicks(NoZeroFormat), L=xlabel, arrow=axisarrow);
yaxis(XEquals(0),ymin - eps,ymax + eps,RightTicks(NoZeroFormat), L = ylabel, arrow = axisarrow);
// "Nice" labeling for origin.
label("$0$", (0,0), NW);

attach(legend(),point(E),20E,UnFill);