import React from 'react';

function ThongKe() {
    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <div className="statistics-details d-flex align-items-center justify-content-between">
                        <div>
                            <p className="statistics-title">Bounce Rate</p>
                            <h3 className="rate-percentage">32.53%</h3>
                            <p className="text-danger d-flex">
                                <i className="mdi mdi-menu-down" />
                                <span>-0.5%</span>
                            </p>
                        </div>
                        <div>
                            <p className="statistics-title">Page Views</p>
                            <h3 className="rate-percentage">7,682</h3>
                            <p className="text-success d-flex">
                                <i className="mdi mdi-menu-up" />
                                <span>+0.1%</span>
                            </p>
                        </div>
                        <div>
                            <p className="statistics-title">New Sessions</p>
                            <h3 className="rate-percentage">68.8</h3>
                            <p className="text-danger d-flex">
                                <i className="mdi mdi-menu-down" />
                                <span>68.8</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className="rate-percentage">2m:35s</h3>
                            <p className="text-success d-flex">
                                <i className="mdi mdi-menu-down" />
                                <span>+0.8%</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">New Sessions</p>
                            <h3 className="rate-percentage">68.8</h3>
                            <p className="text-danger d-flex">
                                <i className="mdi mdi-menu-down" />
                                <span>68.8</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className="rate-percentage">2m:35s</h3>
                            <p className="text-success d-flex">
                                <i className="mdi mdi-menu-down" />
                                <span>+0.8%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 d-flex flex-column">
                    <div className="row flex-grow">
                        <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                                <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                        <div>
                                            <h4 className="card-title card-title-dash">Performance Line Chart</h4>
                                            <h5 className="card-subtitle card-subtitle-dash">
                                                Lorem Ipsum is simply dummy text of the printing
                                            </h5>
                                        </div>
                                        <div id="performance-line-legend">
                                            <div className="chartjs-legend">
                                                <ul>
                                                    <li>
                                                        <span style={{ backgroundColor: '#1F3BB3' }} />
                                                        This week
                                                    </li>
                                                    <li>
                                                        <span style={{ backgroundColor: '#52CDFF' }} />
                                                        Last week
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chartjs-wrapper mt-5">
                                        <div className="chartjs-size-monitor">
                                            <div className="chartjs-size-monitor-expand">
                                                <div className="" />
                                            </div>
                                            <div className="chartjs-size-monitor-shrink">
                                                <div className="" />
                                            </div>
                                        </div>
                                        <canvas
                                            id="performaneLine"
                                            style={{ display: 'block', width: 602, height: 150 }}
                                            width={602}
                                            height={150}
                                            className="chartjs-render-monitor"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ThongKe;
