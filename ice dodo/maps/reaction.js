var map = {
    title: "Reaction",
    song: "env2",
    maker: "TimTam",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([11.29, 14.59024, -321.57]);
        a.p([13.52, 12.86006, -225.5], [0, 0, 0], [20, 20, 2], 1, 0);
        a.y([10.01, 10.15012, -139.14], [0, 0, -0.27], [20, 2, 20], 2.0, 0);
        a.y([10.01, 8.37018, -158.96], [-1.3, -0.52, -0.26], [20, 2, 20], 2.0, 0);
        a.y([7.06, 8.37024, -176.28], [-1.38, -0.8, -0.32], [20, 2, 20], 2.0, 0);
        a.y([10.01, 8.3703, -158.96], [-1.3, -0.52, -0.26], [20, 2, 20], 2.0, 0);
        a.y([10.01, 8.37, -190.4], [-1.3, -0.52, -0.26], [20, 2, 20], 2.0, 0);
        a.y([10.01, 10.15006, -204.87], [0, 0, -0.27], [20, 2, 20], 2.0, 0);
        a.y([12.23, 10.15012, -217.09], [0, 0, 0], [20, 2, 20], 2.0, 0);
        a.y([12.23, 10.15018, -117.94], [0, 0, 0], [20, 2, 20], 2.0, 0);
        a.y([19.17, 0.00024, -119.51], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([6.03, 0.0003, -119.51], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([19.17, -12.21, -136.82], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([-0.93, -12.20994, -136.82], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([19.17, 0.00012, -158.66], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([19.17, 0.00018, -174.95], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([-2.67, 0.00024, -158.66], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([-4.44, 0.0003, -174.95], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([19.17, 0, -189.89], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([-4.22, 0.00006, -189.89], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([21.6, 0.00012, -205.27], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([24.13, 0.00018, -216.38], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([-2.81, 0.00024, -205.27], [0, 0, 0], [2, 200, 2], 2.0, 0);
        a.y([13.23, 0.0003, -261.16], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([19.86, 7.23, -265.58], [0, 0, 0], [10, 2, 10], 3.0, 0);
        a.y([12.66, 6.420059999999999, -272.92], [0, 0, 0], [10, 2, 10], 3.0, 0);
        a.y([6.06, 7.230119999999999, -265.58], [0, 0, 0], [10, 2, 10], 3.0, 0);
        a.y([6.71, 0.00018, -236.89], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([18.76, 0.00024, -236.89], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([-0.31, 0.0003, -261.16], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([26.88, 0, -261.16], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([7.08, 0.00006, -288.65], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([17.36, 0.00012, -288.65], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([17.36, 0.00018, -299.79], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.y([6.81, 0.00024, -299.79], [0, 0, 0], [2, 200, 2], 3.0, 0);
        a.p([0, -2.50988, -12.14], [0, 0, 0], [20, 20, 2], 1.0, 0);
        a.p([13.52, 14.53018, -111.31], [0, 0, 0], [20, 20, 2], 2.0, 0);
        a.p([12.45, 10.11024, -237.05], [0, 0, 0], [10, 2, 20], 3.0, 0);
        a.p([15.63, 10.1103, -255.45], [-0.35, 0, 0], [2, 2, 20], 3.0, 0);
        a.p([9.21, 10.11, -255.57], [0.35, 0, 0], [2, 2, 20], 3.0, 0);
        a.p([12.45, 8.34006, -283.92], [0, 0.33, 0], [2, 2, 20], 3.0, 0);
        a.p([12.45, 10.11012, -293.72], [0, 0.33, 0], [2, 2, 20], 3.0, 0);
        a.p([11.59, 10.79018, -305.29], [0, 0.33, 0], [2, 2, 20], 3.0, 0);
        a.p([11.59, 10.790239999999999, -305.29], [0, 0.33, 0], [2, 2, 20], 3.0, 0);
        a.p([11.59, 10.0003, -313.62], [0, 0.33, 0], [2, 2, 20], 3.0, 0);
        a.y([6.8, 0, -101.62], [0, 0, 0], [2, 200, 2], 1, 0);
        a.p([0, -1.46994, -5.21], [0, 0, 0], [2, 2, 20], 1, 0);
        a.p([1.93, -1.51988, -24.41], [-0.2, 0, 0], [2, 2, 20], 1, 0);
        a.p([4.15, -1.80982, -41.34], [-0.03, 0, 0], [2, 2, 20], 1, 0);
        a.p([6.55, 0.20024, -59.65], [-0.25, 0.27, -0.01], [2, 2, 20], 1, 0);
        a.p([9.24, 4.0103, -73.18], [-0.09, 0.27, -0.01], [2, 2, 20], 1, 0);
        a.p([10.33, 7.62, -86.7], [-0.09, 0.27, -0.01], [2, 2, 20], 1, 0);
        a.p([11.87, 11.89006, -103.71], [-0.09, 0.21, 0], [2, 2, 20], 1, 0);
        a.y([-5.29, 0.00012, -27.69], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([10.51, 0.00018, -27.69], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([10.51, 0.00024, -42.07], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([10.51, 0.0003, -54.75], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([13.1, 0, -66.26], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([16.34, 0.00006, -78.16], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([16.83, 1.15012, -89.01], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([16.3, 0.00018, -101.62], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([4.74, 0.00024, -78.16], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([7.43, 1.1503, -89.01], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([1.86, 0, -66.26], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([-1.86, 0.00006, -54.75], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([-4.3, 0.00012, -42.07], [0, 0, 0], [2, 200, 2], 1, 0);
        a.y([0.54, 0.00018, -216.38], [0, 0, 0], [2, 200, 2], 2.0, 0);
    },
    post: function() {
        a.m('P0').unfreezeWorldMatrix();
        a.m('P1').unfreezeWorldMatrix();
        a.m('P2').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -9.53) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P1', 'y', 0.5);
                if (PZ < -11.53) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -110.38) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.mov('P2', 'y', 0.5);
                if (PZ < -112.38) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -223.23) {
                    this.section_id += 1
                }
                break;
            case 5:
                a.mov('P0', 'y', 0.5);
                if (PZ < -225.23) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [13.52, 12.86006, -225.5], [0, 0, 0], [20, 20, 2]);
        a.re('Y0', [10.01, 10.15012, -139.14], [0, 0, -0.27], [20, 2, 20]);
        a.re('Y1', [10.01, 8.37018, -158.96], [-1.3, -0.52, -0.26], [20, 2, 20]);
        a.re('Y2', [7.06, 8.37024, -176.28], [-1.38, -0.8, -0.32], [20, 2, 20]);
        a.re('Y3', [10.01, 8.3703, -158.96], [-1.3, -0.52, -0.26], [20, 2, 20]);
        a.re('Y4', [10.01, 8.37, -190.4], [-1.3, -0.52, -0.26], [20, 2, 20]);
        a.re('Y5', [10.01, 10.15006, -204.87], [0, 0, -0.27], [20, 2, 20]);
        a.re('Y6', [12.23, 10.15012, -217.09], [0, 0, 0], [20, 2, 20]);
        a.re('Y7', [12.23, 10.15018, -117.94], [0, 0, 0], [20, 2, 20]);
        a.re('Y8', [19.17, 0.00024, -119.51], [0, 0, 0], [2, 200, 2]);
        a.re('Y9', [6.03, 0.0003, -119.51], [0, 0, 0], [2, 200, 2]);
        a.re('Y10', [19.17, -12.21, -136.82], [0, 0, 0], [2, 200, 2]);
        a.re('Y11', [-0.93, -12.20994, -136.82], [0, 0, 0], [2, 200, 2]);
        a.re('Y12', [19.17, 0.00012, -158.66], [0, 0, 0], [2, 200, 2]);
        a.re('Y13', [19.17, 0.00018, -174.95], [0, 0, 0], [2, 200, 2]);
        a.re('Y14', [-2.67, 0.00024, -158.66], [0, 0, 0], [2, 200, 2]);
        a.re('Y15', [-4.44, 0.0003, -174.95], [0, 0, 0], [2, 200, 2]);
        a.re('Y16', [19.17, 0, -189.89], [0, 0, 0], [2, 200, 2]);
        a.re('Y17', [-4.22, 0.00006, -189.89], [0, 0, 0], [2, 200, 2]);
        a.re('Y18', [21.6, 0.00012, -205.27], [0, 0, 0], [2, 200, 2]);
        a.re('Y19', [24.13, 0.00018, -216.38], [0, 0, 0], [2, 200, 2]);
        a.re('Y20', [-2.81, 0.00024, -205.27], [0, 0, 0], [2, 200, 2]);
        a.re('Y21', [13.23, 0.0003, -261.16], [0, 0, 0], [2, 200, 2]);
        a.re('Y22', [19.86, 7.23, -265.58], [0, 0, 0], [10, 2, 10]);
        a.re('Y23', [12.66, 6.420059999999999, -272.92], [0, 0, 0], [10, 2, 10]);
        a.re('Y24', [6.06, 7.230119999999999, -265.58], [0, 0, 0], [10, 2, 10]);
        a.re('Y25', [6.71, 0.00018, -236.89], [0, 0, 0], [2, 200, 2]);
        a.re('Y26', [18.76, 0.00024, -236.89], [0, 0, 0], [2, 200, 2]);
        a.re('Y27', [-0.31, 0.0003, -261.16], [0, 0, 0], [2, 200, 2]);
        a.re('Y28', [26.88, 0, -261.16], [0, 0, 0], [2, 200, 2]);
        a.re('Y29', [7.08, 0.00006, -288.65], [0, 0, 0], [2, 200, 2]);
        a.re('Y30', [17.36, 0.00012, -288.65], [0, 0, 0], [2, 200, 2]);
        a.re('Y31', [17.36, 0.00018, -299.79], [0, 0, 0], [2, 200, 2]);
        a.re('Y32', [6.81, 0.00024, -299.79], [0, 0, 0], [2, 200, 2]);
        a.re('P1', [0, -2.50988, -12.14], [0, 0, 0], [20, 20, 2]);
        a.re('P2', [13.52, 14.53018, -111.31], [0, 0, 0], [20, 20, 2]);
        a.re('P3', [12.45, 10.11024, -237.05], [0, 0, 0], [10, 2, 20]);
        a.re('P4', [15.63, 10.1103, -255.45], [-0.35, 0, 0], [2, 2, 20]);
        a.re('P5', [9.21, 10.11, -255.57], [0.35, 0, 0], [2, 2, 20]);
        a.re('P6', [12.45, 8.34006, -283.92], [0, 0.33, 0], [2, 2, 20]);
        a.re('P7', [12.45, 10.11012, -293.72], [0, 0.33, 0], [2, 2, 20]);
        a.re('P8', [11.59, 10.79018, -305.29], [0, 0.33, 0], [2, 2, 20]);
        a.re('P9', [11.59, 10.790239999999999, -305.29], [0, 0.33, 0], [2, 2, 20]);
        a.re('P10', [11.59, 10.0003, -313.62], [0, 0.33, 0], [2, 2, 20]);
        a.re('Y33', [6.8, 0, -101.62], [0, 0, 0], [2, 200, 2]);
        a.re('P11', [0, -1.46994, -5.21], [0, 0, 0], [2, 2, 20]);
        a.re('P12', [1.93, -1.51988, -24.41], [-0.2, 0, 0], [2, 2, 20]);
        a.re('P13', [4.15, -1.80982, -41.34], [-0.03, 0, 0], [2, 2, 20]);
        a.re('P14', [6.55, 0.20024, -59.65], [-0.25, 0.27, -0.01], [2, 2, 20]);
        a.re('P15', [9.24, 4.0103, -73.18], [-0.09, 0.27, -0.01], [2, 2, 20]);
        a.re('P16', [10.33, 7.62, -86.7], [-0.09, 0.27, -0.01], [2, 2, 20]);
        a.re('P17', [11.87, 11.89006, -103.71], [-0.09, 0.21, 0], [2, 2, 20]);
        a.re('Y34', [-5.29, 0.00012, -27.69], [0, 0, 0], [2, 200, 2]);
        a.re('Y35', [10.51, 0.00018, -27.69], [0, 0, 0], [2, 200, 2]);
        a.re('Y36', [10.51, 0.00024, -42.07], [0, 0, 0], [2, 200, 2]);
        a.re('Y37', [10.51, 0.0003, -54.75], [0, 0, 0], [2, 200, 2]);
        a.re('Y38', [13.1, 0, -66.26], [0, 0, 0], [2, 200, 2]);
        a.re('Y39', [16.34, 0.00006, -78.16], [0, 0, 0], [2, 200, 2]);
        a.re('Y40', [16.83, 1.15012, -89.01], [0, 0, 0], [2, 200, 2]);
        a.re('Y41', [16.3, 0.00018, -101.62], [0, 0, 0], [2, 200, 2]);
        a.re('Y42', [4.74, 0.00024, -78.16], [0, 0, 0], [2, 200, 2]);
        a.re('Y43', [7.43, 1.1503, -89.01], [0, 0, 0], [2, 200, 2]);
        a.re('Y44', [1.86, 0, -66.26], [0, 0, 0], [2, 200, 2]);
        a.re('Y45', [-1.86, 0.00006, -54.75], [0, 0, 0], [2, 200, 2]);
        a.re('Y46', [-4.3, 0.00012, -42.07], [0, 0, 0], [2, 200, 2]);
        a.re('Y47', [0.54, 0.00018, -216.38], [0, 0, 0], [2, 200, 2]);
    },
    physics_update: function() {},
    render_update: function() {}
}
