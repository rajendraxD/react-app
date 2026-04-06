import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Divider,
  IconButton,
  Tabs,
  Tab,
  Button,
  Chip,
} from "@mui/material";
import {
  EmojiEvents as EventsIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  MoreHoriz as MoreIcon,
  PlayCircle as PlayIcon,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Data for charts
const lineData = [
  { name: "1 Dec", value: 100 },
  { name: "8 Dec", value: 150 },
  { name: "16 Dec", value: 80 },
  { name: "31 Dec", value: 140 },
];

const pieData = [
  { name: "Typography", value: 35, color: "#ff8a65" },
  { name: "Color", value: 15, color: "#4db6ac" },
  { name: "UI Course", value: 10, color: "#4fc3f7" },
  { name: "UX Course", value: 20, color: "#9575cd" },
  { name: "Development", value: 20, color: "#ba68c8" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box
      sx={{
        p: 0,
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Metric Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #05b38a 0%, #76d275 100%)",
              color: "white",
              position: "relative",
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Total Students
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              1250
            </Typography>
            <Box
              sx={{
                mt: 2,
                fontSize: "0.75rem",
                opacity: 0.8,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Added last year</span>
              <span style={{ fontWeight: 700 }}>96,441</span>
            </Box>
            <SchoolIcon
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.3,
                fontSize: 40,
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #4097f4 0%, #81d4fa 100%)",
              color: "white",
              position: "relative",
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Total Teachers
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              23
            </Typography>
            <Box
              sx={{
                mt: 2,
                fontSize: "0.75rem",
                opacity: 0.8,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Added Last Year</span>
              <span style={{ fontWeight: 700 }}>2,309</span>
            </Box>
            <AssignmentIcon
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.3,
                fontSize: 40,
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #9c2cf3 0%, #ba68f8 100%)",
              color: "white",
              position: "relative",
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Total Events
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              986
            </Typography>
            <Box sx={{ mt: 1.5, fontSize: "0.75rem", opacity: 0.9 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}
              >
                <span>Ongoing</span> <span>2</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}
              >
                <span>Upcoming</span> <span>45</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Completed</span> <span>7401</span>
              </div>
            </Box>
            <EventsIcon
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.3,
                fontSize: 40,
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #ff6f24 0%, #ffab91 100%)",
              color: "white",
              position: "relative",
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Plan
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Basic
            </Typography>
            <Button
              variant="text"
              size="small"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "0.7rem",
                p: 0,
                mt: 1,
              }}
            >
              See Details
            </Button>
            <Box
              sx={{
                mt: 1,
                fontSize: "0.75rem",
                opacity: 0.8,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Expires In</span>
              <span style={{ fontWeight: 700 }}>01/05/2024</span>
            </Box>
            <PlayIcon
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.3,
                fontSize: 40,
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Main Content Sections */}
      <Grid container spacing={3}>
        {/* Left Column: Courses and Recent */}
        <Grid item xs={12} lg={8}>
          {/* Courses Tabs */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: "20px", mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Courses
              </Typography>
              <MoreIcon sx={{ color: "#9ca3af" }} />
            </Box>

            <Tabs
              value={activeTab}
              onChange={(e, v) => setActiveTab(v)}
              sx={{
                mb: 3,
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  minWidth: 80,
                },
                "& .Mui-selected": { color: "#05b38a !important" },
                "& .MuiTabs-indicator": { backgroundColor: "#05b38a" },
              }}
            >
              <Tab label="All" />
              <Tab label="Ongoing" />
              <Tab label="Upcoming" />
              <Tab label="Completed" />
            </Tabs>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                {
                  title: "Graphic Design",
                  tutor: "John Doe",
                  time: "3h 25m",
                  students: "1232 Students",
                  status: "Ongoing",
                  color: "warning",
                },
                {
                  title: "Google UX Design",
                  tutor: "Google",
                  time: "3h 25m",
                  students: "855 Students",
                  status: "Completed",
                  color: "success",
                },
                {
                  title: "UX Design MasterTrack®",
                  tutor: "University of Minnesota",
                  time: "3h 25m",
                  students: "785 Students",
                  status: "Upcoming",
                  color: "info",
                },
              ].map((course, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    px: 2,
                    borderRadius: "12px",
                    "&:hover": { bgcolor: "#f9fafb" },
                  }}
                >
                  <Avatar
                    variant="rounded"
                    sx={{ width: 48, height: 48, mr: 2, bgcolor: "#f3f4f6" }}
                  >
                    <SchoolIcon sx={{ color: "#9ca3af" }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {course.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#6b7280" }}>
                      {course.tutor}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ flex: 1, color: "#6b7280", textAlign: "center" }}
                  >
                    {course.time}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ flex: 1, color: "#6b7280", textAlign: "center" }}
                  >
                    {course.students}
                  </Typography>
                  <Box sx={{ flex: 1, textAlign: "right" }}>
                    <Chip
                      label={course.status}
                      size="small"
                      color={course.color}
                      sx={{ fontSize: "0.6rem", height: 20, fontWeight: 700 }}
                    />
                  </Box>
                  <IconButton size="small" sx={{ ml: 2 }}>
                    <MoreIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* Recently Participated */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: "20px" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              Student Participated Recently
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {[
                {
                  name: "Asiq Mohammed",
                  sid: "12345678",
                  course: "GD-45131",
                  score: "08/10",
                  avatar: "A",
                },
                {
                  name: "Arif Hossen",
                  sid: "12345678",
                  course: "UX-48131",
                  score: "09/10",
                  avatar: "B",
                },
                {
                  name: "Murad Hossen",
                  sid: "12345678",
                  course: "GD-48131",
                  score: "07/10",
                  avatar: "C",
                },
              ].map((student, idx) => (
                <Box
                  key={idx}
                  sx={{ display: "flex", alignItems: "center", px: 1 }}
                >
                  <Avatar
                    sx={{
                      mr: 2,
                      width: 36,
                      height: 36,
                      bgcolor: "#e0e7ff",
                      color: "#4f46e5",
                      fontSize: "0.9rem",
                    }}
                  >
                    {student.avatar}
                  </Avatar>
                  <Typography variant="body2" sx={{ flex: 2, fontWeight: 600 }}>
                    {student.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ flex: 2, color: "#6b7280" }}
                  >
                    SID: <span style={{ fontWeight: 600 }}>{student.sid}</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ flex: 2, color: "#6b7280" }}
                  >
                    {student.course}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: "#111827" }}
                  >
                    {student.score}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Column: Charts */}
        <Grid item xs={12} lg={4}>
          {/* Participation Chart */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: "20px", mb: 3 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1rem" }}
              >
                Students Participation
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#05b38a", fontWeight: 700 }}
              >
                Show: Monthly
              </Typography>
            </Box>
            <Box sx={{ height: 220, width: "100%" }}>
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f3f4f6"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "10px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#05b38a"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      fill: "#05b38a",
                      strokeWidth: 2,
                      stroke: "white",
                    }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>

          {/* Improvement Donut */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: "20px" }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1rem" }}
              >
                Total Improvement
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#4b5563", fontWeight: 700 }}
              >
                Show: This month
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", height: 200 }}>
              <Box sx={{ width: "60%", height: "100%" }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>

              <Box
                sx={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {pieData.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "2px",
                        bgcolor: item.color,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#6b7280",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ ml: "auto", fontWeight: 700 }}
                    >
                      {item.value}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
