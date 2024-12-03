import graph;
import slopefield;
real eps=0.2;
//This gives the size of the figure.
size(200);
//plot annotations
arrowbar axisarrow = Arrow(TeXHead);
Label xlabel = Label("$t$", position = EndPoint, align = 2E);
Label ylabel = Label("$x$", position = EndPoint, align = 2N);
//This is to draw the slope field.
real func1(real x, real y) {return y*(1-y);}
real xmin=-3, xmax=3;
real ymin=-3, ymax=3;
add(slopefield(func1,(-3,-3),(3,3),15,deepcyan+0.3bp));
//label axes and origin
xaxis(YZero,xmin-eps,xmax+eps, LeftTicks(NoZeroFormat), L=xlabel, arrow=axisarrow);
yaxis(XZero,ymin-eps,ymax+eps, RightTicks(NoZeroFormat), L=ylabel, arrow=axisarrow);
label("$0$", (0,0), SE);